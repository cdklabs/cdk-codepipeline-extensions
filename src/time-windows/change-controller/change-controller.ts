import {
  ComparisonOperator,
  TreatMissingData,
} from 'aws-cdk-lib/aws-cloudwatch';
import { IStage } from 'aws-cdk-lib/aws-codepipeline';
import { Rule, RuleTargetInput, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { ChangeControllerFunction } from './change-controller-function';
import { Calendar } from '../calendar/calendar';

/**
 * Properties used to create change controller.
 */
export interface ChangeControllerProps {
  /**
   * The calendar object.
   */
  readonly calendar: Calendar;

  /**
   * The pipeline stage.
   */
  readonly stage: IStage;

  /**
   * The schedule on which to check the calendar and alarm state.
   */
  readonly schedule: Schedule;

  /**
   * The terms to search for in alarm descriptions.
   *
   * These if these alarms are in ALARM state, the change controller will close
   * the pipeline stage.
   */
  readonly searchTerms: string[];
}

/**
 * A change controller. When added to a stage in a pipeline, this will check against
 * a calendar and enable or disable the stage transition based off that calendar,
 * defaulting to closed when the calendar cannot be found or when
 * the check against it fails. It also checks to against alarms.
 */
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
      })
    );

    // Grant permission to retrieve calendars
    fn.addToRolePolicy(
      new PolicyStatement({
        resources: [props.calendar.calendarArn],
        actions: ['ssm:GetCalendarState'],
        effect: Effect.ALLOW,
      })
    );

    // Grant permisssion to check alarm states
    fn.addToRolePolicy(
      new PolicyStatement({
        resources: ['*'],
        actions: ['cloudwatch:DescribeAlarms'],
        effect: Effect.ALLOW,
      })
    );

    // Any error in the lambda function will close the time window
    const alarmDescription = 'change-controller-error-alarm';

    fn.metricErrors({ statistic: 'sum' }).createAlarm(
      this,
      'change-controller-alarm',
      {
        alarmName: `ChangeController-${props.stage.pipeline.pipelineName}${props.stage.stageName}`,
        evaluationPeriods: 1,
        threshold: 1,
        comparisonOperator:
          ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
        treatMissingData: TreatMissingData.BREACHING,
        alarmDescription,
      }
    );

    // Create a rule to run the lambda on a schedule defined by the user
    const searchTerms = props.searchTerms.concat(alarmDescription);

    new Rule(this, 'Scheduler', {
      ruleName: fn.functionName,
      schedule: props.schedule,
      targets: [
        new LambdaFunction(fn, {
          event: RuleTargetInput.fromObject({
            calendar: props.calendar,
            searchTerms,
            stageName: props.stage.stageName,
            pipelineName: props.stage.pipeline.pipelineName,
          }),
        }),
      ],
    });
  }
}
