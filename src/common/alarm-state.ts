import { CloudWatch } from 'aws-sdk';
import { DescribeAlarmsInput, DescribeAlarmsOutput } from 'aws-sdk/clients/cloudwatch';

export enum AlarmState {
  OK = 'OK',
  ALARM = 'ALARM',
  INSUFFICIENT_DATA = 'INSUFFICIENT_DATA',
}

export interface IAlarmDetail {
  readonly alarmArn?: string;
  readonly state: string;
  readonly alarmDescription?: string;
  reason: string;
};

export interface AggregateAlarmState {
  readonly alarmDetails: IAlarmDetail[];
  readonly state: AlarmState;
  readonly summary: string;
};

/**
 * searchTerms: a list of terms to match in the alarm description
 */
export interface GetAlarmStateOptions {
  readonly searchTerms: string[];
};

export const getCloudwatchAlarms = async(params?: DescribeAlarmsInput): Promise<IAlarmDetail[]> => {
  const cloudwatch = new CloudWatch();

  let nextToken: string | undefined;
  let results: IAlarmDetail[] = [];

  do {
    const result: DescribeAlarmsOutput = await cloudwatch
      .describeAlarms({ AlarmTypes: ['CompositeAlarm', 'MetricAlarm'], ...params, NextToken: nextToken })
      .promise();

    results = result.CompositeAlarms ? results.concat(result.CompositeAlarms?.map(alarm => {
      return {
        alarmArn: alarm.AlarmArn,
        state: alarm.StateValue!,
        reason: alarm.StateReason!,
        alarmDescription: alarm.AlarmDescription,
      };
    })) : results;
    results = result.MetricAlarms ? results.concat(result.MetricAlarms?.map(alarm => {
      return {
        alarmArn: alarm.AlarmArn,
        state: alarm.StateValue!,
        reason: alarm.StateReason!,
        alarmDescription: alarm.AlarmDescription,
      };
    })) : results;

    nextToken = result.NextToken;
  } while (nextToken);
  return results;
};

/**
 * Returns all alarms starting with the provided prefix in the state of ALARM. In addition,
 * any exceptions caught will be logged and converted into an alarm state of options.defaultState
 * with an associated reason.
 */
export const getAlarms = async (searchTerms: string[]): Promise<IAlarmDetail[]> => {
  const states: IAlarmDetail[] = [];
  try {
    const alarmsForAccountAndRegion = await getCloudwatchAlarms();
    const alarms = hasAlarmMatching(alarmsForAccountAndRegion, searchTerms).map((alarm) => {
      alarm.reason = `${alarm.alarmArn} in ${alarm.state} due to ${alarm.reason}`;
      return alarm;
    });

    if (alarms.length === 0) {
      alarms.push({
        state: AlarmState.ALARM,
        reason: `No alarms were found for the provided search terms: ${searchTerms.join(', ')}.`,
      });
    }
  } catch (e) {
    const message = 'Unable to retrieve alarms.';
    states.push({ reason: message, state: AlarmState.ALARM });
    console.error(message, e);
  }
  return states;
};

/**
 * Calculate and return an aggregate alarm state across alarms returned from all
 * CloudWatch clients provided. If any client errors are thrown, the returned state
 * will be ALARM.
 *
 */
export const getAggregateAlarmState = async (searchTerms: string[]): Promise<AggregateAlarmState> => {
  const alarmDetails: IAlarmDetail[] = await getAlarms(searchTerms);

  return {
    alarmDetails,
    state: alarmDetails.find((a) => a.state === AlarmState.ALARM)?.state as AlarmState ?? AlarmState.OK,
    summary: `${alarmDetails
      .filter((a) => a.state === AlarmState.ALARM)
      .map((a) => a.reason)
      .join(', ')}`,
  };
};

const hasAlarmMatching = (alarms: IAlarmDetail[], searchTerms: string[]): IAlarmDetail[] => {
  return alarms.flatMap((alarm) => searchTerms.map((searchTerm) => {
    return alarm.alarmDescription?.includes(searchTerm) ? alarm : undefined;
  }).filter((sameAlarm) => sameAlarm)).filter((sameAlarm, index) => alarms.indexOf(sameAlarm!) === index) as IAlarmDetail[];
};