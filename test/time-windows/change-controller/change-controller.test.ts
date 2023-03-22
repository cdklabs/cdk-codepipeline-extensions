import path from 'path';
import { Duration, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { BuildSpec, PipelineProject } from 'aws-cdk-lib/aws-codebuild';
import { Repository } from 'aws-cdk-lib/aws-codecommit';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import {
  CodeBuildAction,
  CodeCommitSourceAction,
} from 'aws-cdk-lib/aws-codepipeline-actions';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { Calendar } from '../../../src/time-windows/calendar/calendar';
import { ChangeController } from '../../../src/time-windows/change-controller/change-controller';

jest.mock('../../../src/time-windows/calendar/calendar');
const mockPath = jest.fn().mockReturnValue({ calendarArn: 'test-calendar' });
Calendar.path = mockPath;

describe('Change Controller Tests', () => {
  // Setup test resources
  const stack = new Stack();
  const pipeline = new Pipeline(stack, 'test-pipeline', {
    pipelineName: 'test-pipeline',
  });

  const sourceArtifact = new Artifact('Source');
  const stage = pipeline.addStage({
    stageName: 'Source',
  });

  stage.addAction(
    new CodeCommitSourceAction({
      actionName: 'CodeCommitSource',
      branch: 'main',
      repository: new Repository(stack, 'test-repository', {
        repositoryName: 'test-repository',
      }),
      output: sourceArtifact,
    })
  );

  pipeline
    .addStage({
      stageName: 'Build',
    })
    .addAction(
      new CodeBuildAction({
        actionName: 'BuildAction',
        input: sourceArtifact,
        outputs: [],
        project: new PipelineProject(stack, 'test-project', {
          buildSpec: BuildSpec.fromObject({}),
        }),
      })
    );

  const calendar = Calendar.path({
    calendarName: 'calendar.ics',
    calendarPath: path.join(__dirname),
  });
  new ChangeController(stack, 'test-change-controller', {
    calendar,
    stage,
    schedule: Schedule.rate(Duration.minutes(1)),
    searchTerms: ['test-search-term'],
  });

  const template = Template.fromStack(stack);

  test('Contains Expected Resources For Change Controller', () => {
    template.resourceCountIs('AWS::Lambda::Function', 1);
    template.resourceCountIs('AWS::Lambda::Permission', 1);
    template.resourceCountIs('AWS::CloudWatch::Alarm', 1);
    template.resourceCountIs('AWS::Events::Rule', 2);
  });

  test('Lambda Function Matches Change Controller Lambda', () => {
    // Partial Match
    template.hasResourceProperties('AWS::Lambda::Function', {
      Description:
        'src/time-windows/change-controller/change-controller.lambda.ts',
      Handler: 'index.handler',
      Runtime: 'nodejs16.x',
    });

    // Only One
    template.resourcePropertiesCountIs(
      'AWS::Lambda::Function',
      {
        Description:
          'src/time-windows/change-controller/change-controller.lambda.ts',
        Handler: 'index.handler',
        Runtime: 'nodejs14.x',
      },
      1
    );
  });

  test('Lambda Permission Matches Permissions added in Change Controller', () => {
    const lambda = template.findResources('AWS::Lambda::Function');
    const source = template.findResources('AWS::Events::Rule');

    template.hasResource('AWS::Lambda::Permission', {
      Properties: {
        Action: 'lambda:InvokeFunction',
        FunctionName: {
          'Fn::GetAtt': [Object.keys(lambda)[0], 'Arn'],
        },
        Principal: 'events.amazonaws.com',
        SourceArn: {
          'Fn::GetAtt': [Object.keys(source)[1], 'Arn'],
        },
      },
    });
  });

  test('Contains Cloudwatch Alarm', () => {
    const lambda = template.findResources('AWS::Lambda::Function');
    const pipelineTemplate = template.findResources(
      'AWS::CodePipeline::Pipeline'
    );

    template.hasResourceProperties('AWS::CloudWatch::Alarm', {
      AlarmName: {
        'Fn::Join': [
          '',
          [
            'ChangeController-',
            { Ref: Object.keys(pipelineTemplate)[0] },
            'Source',
          ],
        ],
      },
      Dimensions: [
        {
          Name: 'FunctionName',
          Value: { Ref: Object.keys(lambda)[0] },
        },
      ],
    });

    template.resourcePropertiesCountIs(
      'AWS::CloudWatch::Alarm',
      {
        ComparisonOperator: 'GreaterThanOrEqualToThreshold',
        EvaluationPeriods: 1,
        Dimensions: [
          {
            Name: 'FunctionName',
            Value: { Ref: Object.keys(lambda)[0] },
          },
        ],
        AlarmName: {
          'Fn::Join': [
            '',
            [
              'ChangeController-',
              { Ref: Object.keys(pipelineTemplate)[0] },
              'Source',
            ],
          ],
        },
        MetricName: 'Errors',
        Namespace: 'AWS/Lambda',
        Period: 300,
        Statistic: 'Sum',
        Threshold: 1,
        TreatMissingData: 'breaching',
      },
      1
    );
  });

  test('Contains Schedue Rule With Correct Inputs', () => {
    // Any Value
    template.hasResourceProperties('AWS::Events::Rule', {
      ScheduleExpression: 'rate(1 minute)',
      State: 'ENABLED',
      Targets: [
        {
          Arn: Match.anyValue(),
          Id: Match.anyValue(),
          Input: {
            'Fn::Join': [
              '',
              [
                '{"calendar":{"calendarArn":"test-calendar"},"searchTerms":["test-search-term","change-controller-error-alarm"],"stageName":"Source","pipelineName":"',
                Match.anyValue(),
                '"}',
              ],
            ],
          },
        },
      ],
    });
  });
});
