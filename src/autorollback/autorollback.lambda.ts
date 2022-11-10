import { OnEventRequest, OnEventResponse } from 'aws-cdk-lib/custom-resources/lib/provider-framework/types'; // eslint-disable-line import/no-unresolved
import { SQSEvent } from 'aws-lambda';
import { AlarmState, getAggregateAlarmState } from '../common/alarm-state';

export interface EventRequest extends OnEventRequest, SQSEvent {
  readonly endTime?: number;
}

export interface EventResponse extends OnEventResponse { }

export const handler = async(event: EventRequest): Promise<EventResponse> => {
  console.log('Event: %j', { ...event, ResponseURL: '...' });

  if (event.RequestType === 'Create' || event.RequestType === 'Update') {
    const searchTags: string[] = event.ResourceProperties.SearchTags;
    const timeout: number = event.ResourceProperties.MonitoringTime;

    const endTime = event.ResourceProperties.EndTime ?? Date.now() + timeout * 1000;

    if (endTime > Date.now()) {
      if (searchTags.length > 0) {
        const alarms = await getAggregateAlarmState(searchTags);
        if (alarms.state === AlarmState.ALARM) {
          throw new Error(`Rolling back the deployment: [${alarms.summary}]`);
        }
        console.log(`Monitoring until ${new Date(endTime).toLocaleTimeString()}`);
        return { IsComplete: false };
      }
    }

    console.log('The monitoring period completed without alarm.');
    return { IsComplete: true, EndTime: endTime };
  }

  console.log('Skipping checking alarms. This resource only works during Create and Update.');
  return { IsComplete: true };
};