import { ChangeControllerEvent } from './types';
import { getAggregateAlarmState } from '../../shared.lambda/alarm-state';
import { getCalendarState } from '../../shared.lambda/calendar-state';
import {
  disableStageTransition,
  enableStageTransition,
  getStageState,
} from '../../shared.lambda/pipeline-state';

export const handler = async (
  event: ChangeControllerEvent,
  context: any
): Promise<void> => {
  const pipelineName = event.pipelineName;
  const stageName = event.stageName;

  const calendarState = await getCalendarState(event.calendar.calendarName);
  const stageState = await getStageState(pipelineName, stageName);
  const alarmState = await getAggregateAlarmState(event.searchTerms);

  const input = {
    pipelineName: pipelineName,
    stageName: stageName,
    transitionType: 'Inbound' as const,
  };
  if (calendarState.state === 'OPEN' && alarmState.state === 'OK') {
    console.log(`Enabling transition: ${JSON.stringify(input, null, 2)}`);
    await enableStageTransition(input, context.functionName, stageState);
  } else {
    // If in ALARM, use that as the reason instead of the calendar.
    const reason =
      alarmState.state === 'ALARM' ? alarmState.summary : calendarState.summary;
    const disableInput = { ...input, reason };
    console.log(
      `Disabling transition: ${JSON.stringify(disableInput, null, 2)}`
    );
    await disableStageTransition(
      disableInput,
      context.functionName,
      stageState
    );
  }
};
