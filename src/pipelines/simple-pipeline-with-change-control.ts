import { Arn, ArnFormat, Stack } from 'aws-cdk-lib';
import {
  BuildSpec,
  ComputeType,
  LinuxBuildImage,
  PipelineProject,
} from 'aws-cdk-lib/aws-codebuild';
import { IRepository } from 'aws-cdk-lib/aws-codecommit';
import { Artifact, Pipeline, PipelineType } from 'aws-cdk-lib/aws-codepipeline';
import {
  CodeBuildAction,
  CodeCommitSourceAction,
  CodeCommitTrigger,
} from 'aws-cdk-lib/aws-codepipeline-actions';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Calendar } from '../time-windows/calendar/calendar';
import { ChangeController } from '../time-windows/change-controller/change-controller';

/**
 * Props for creating a pipeline with a change controller.
 */
export interface PipelineWithChangeControlProps {
  /**
   * The name of the pipeline.
   */
  readonly pipelineName: string;

  /**
   * The role used for running the pipeline.
   *
   * @default - A new role is created when the pipeline is created.
   */
  readonly pipelineRole?: IRole;

  /**
   * The AWS CodeCommit repository to be used as the source stage.
   */
  readonly sourceRepository: IRepository;

  /**
   * The calendar used for determining time windows.
   */
  readonly changeControlCalendar: Calendar;

  /**
   * The schedule on which to check the calendar.
   */
  readonly changeControlCheckSchedule: Schedule;

  /**
   * The terms in the alarm descriptions to search for.
   *
   * These if the alarms containing those search terms are in ALARM,
   * the stage transition will be closed.
   */
  readonly searchTerms: string[];
}

/**
 * A pipeline with a change controller.
 */
export class PipelineWithChangeControl extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: PipelineWithChangeControlProps
  ) {
    super(scope, id);

    const sourceOutput = new Artifact('SourceOutput');
    const buildOutput = new Artifact('BuildOutput');

    const pipeline = new Pipeline(this, 'Pipeline', {
      pipelineName: props.pipelineName,
      role: props.pipelineRole,
      pipelineType: PipelineType.V2,
    });

    // Source Stage
    const sourceStage = pipeline.addStage({
      stageName: 'Source',
    });

    const sourceAction = new CodeCommitSourceAction({
      actionName: 'CodeCommitSource',
      branch: 'main',
      trigger: CodeCommitTrigger.EVENTS,
      repository: props.sourceRepository,
      output: sourceOutput,
    });

    sourceStage.addAction(sourceAction);

    // Build stage
    const buildStage = pipeline.addStage({
      stageName: 'Build',
    });

    const buildProject = new PipelineProject(this, 'BuildStageProject', {
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 16,
            },
            // eslint-disable-next-line quote-props
            commands: ['yarn install'],
          },
          build: {
            commands: [
              'echo Build started on `date`',
              'yarn build',
              'yarn cdk synth',
            ],
          },
          post_build: {
            commands: ['echo Build completed on `date`'],
          },
        },
        artifacts: {
          files: ['cdk.out/**/*', 'node_modules/**/*', 'lib/*'],
        },
      }),
      environment: {
        buildImage: LinuxBuildImage.AMAZON_LINUX_2_4,
        privileged: true,
        computeType: ComputeType.SMALL,
      },
    });

    const buildAction = new CodeBuildAction({
      actionName: 'BuildAction',
      project: buildProject,
      input: sourceOutput,
      outputs: [buildOutput],
    });

    buildStage.addAction(buildAction);

    // Deploy Stage
    const deployStage = pipeline.addStage({
      stageName: 'Deploy',
    });

    // CodeBuild Deploy Project
    const deployProject = new PipelineProject(this, 'DeployStageProject', {
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 16,
            },
            // eslint-disable-next-line quote-props
            commands: ['npm install -g aws-cdk'],
          },
          build: {
            commands: [
              'echo Deploy started on `date`',
              'cdk deploy --app cdk.out',
            ],
          },
          post_build: {
            commands: ['echo Deploy completed on `date`'],
          },
        },
      }),
      environment: {
        buildImage: LinuxBuildImage.AMAZON_LINUX_2_4,
        privileged: true,
        computeType: ComputeType.SMALL,
      },
    });

    const policyStatement = new PolicyStatement({
      actions: ['cloudformation:DescribeStacks', 'ssm:GetParameter'],
      resources: ['*'],
    });

    const cdkDeployRoleArn = Arn.format(
      {
        service: 'iam',
        resource: 'role',
        resourceName: 'cdk-hnb659fds-deploy-role-*',
        region: '',
        arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      },
      Stack.of(this)
    );

    const cdkLookupRoleArn = Arn.format(
      {
        service: 'iam',
        resource: 'role',
        resourceName: 'cdk-hnb659fds-lookup-role-*',
        region: '',
        arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      },
      Stack.of(this)
    );

    const cdkPublishingRoleArn = Arn.format(
      {
        service: 'iam',
        resource: 'role',
        resourceName: 'cdk-hnb659fds-file-publishing-role-*',
        region: '',
        arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
      },
      Stack.of(this)
    );

    const assumeRole = new PolicyStatement({
      actions: ['sts:AssumeRole'],
      resources: [cdkDeployRoleArn, cdkLookupRoleArn, cdkPublishingRoleArn],
    });

    deployProject.addToRolePolicy(policyStatement);
    deployProject.addToRolePolicy(assumeRole);

    // CodeBuild Deploy Action
    const deployAction = new CodeBuildAction({
      actionName: 'DeployAction',
      project: deployProject,
      input: buildOutput,
    });

    // Add Deploy Action to Stage
    deployStage.addAction(deployAction);

    // Add Change Controller
    props.changeControlCalendar._bind(this);

    pipeline.stages.forEach((stage) => {
      new ChangeController(this, `change-controller-${stage.stageName}`, {
        calendar: props.changeControlCalendar,
        stage,
        schedule: props.changeControlCheckSchedule,
        searchTerms: props.searchTerms,
      });
    });
  }
}
