import { ComparisonOperator, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import { IStage } from 'aws-cdk-lib/aws-codepipeline';
import { Rule, RuleTargetInput, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Calendar } from '../calendar/calendar';
import { ChangeControllerFunction } from './change-controller-function';

export interface ChangeControllerProps {
  readonly calendar: Calendar;
  readonly stage: IStage;
  readonly schedule: Schedule;
  readonly searchTerms: string[];
};

export class ChangeController extends Construct {
  constructor(scope: Construct, id: string, props: ChangeControllerProps) {
    super(scope, id);

    const fn = new ChangeControllerFunction(this, 'ChangeControllerLambda');

    // Grant permission for stage transitions
    fn.addToRolePolicy(
      new PolicyStatement({
        resources: [`${props.stage.pipeline.pipelineArn}*`],
        actions: [
          'codepipeline:EnableStageTransition',
          'codepipeline:DisableStageTransition',
          'codepipeline:GetPipelineState',
        ],
        effect: Effect.ALLOW,
      }),
    );

    // Grant permission to retrieve calendars
    fn.addToRolePolicy(
      new PolicyStatement({
        resources: [props.calendar.calendarArn],
        actions: ['ssm:GetCalendarState'],
        effect: Effect.ALLOW,
      }),
    );

    // Grant permisssion to check alarm states
    fn.addToRolePolicy(
      new PolicyStatement({
        resources: ['*'],
        actions: ['cloudwatch:DescribeAlarms'],
        effect: Effect.ALLOW,
      }),
    );

    // Any error in the lambda function will close the time window
    fn.metricErrors().with({ statistic: 'sum' }).createAlarm(this, 'change-controller-alarm', {
      alarmName: `ChangeController-${props.stage.pipeline.pipelineName}${props.stage.stageName}`,
      evaluationPeriods: 1,
      threshold: 1,
      comparisonOperator: ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      treatMissingData: TreatMissingData.BREACHING,
    });

    // Create a rule to run the lambda on a schedule defined by the user
    new Rule(this, 'Scheduler', {
      ruleName: fn.functionName,
      schedule: props.schedule,
      targets: [
        new LambdaFunction(fn, {
          event: RuleTargetInput.fromObject({
            calendar: props.calendar,
            searchTerms: props.searchTerms,
            stageName: props.stage.stageName,
            pipelineName: props.stage.pipeline.pipelineName,
          }),
        }),
      ],
    });
  }
}