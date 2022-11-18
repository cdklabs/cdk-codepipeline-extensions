import { getAggregateAlarmState } from '../../common/alarm-state';
import { Calendar } from '../calendar/calendar';
import { getCalendarState } from './calendar-state';
import {
  disableStageTransition,
  enableStageTransition,
  getStageState,
} from './pipeline-state';

/**
 * The event inputs required for the ChangeController lambda function.
 */
export interface ChangeControllerEvent {
  /**
   * The calendar used to determine whether a stage transition should be opened or closed.
   */
  readonly calendar: Calendar;

  /**
   * The terms in alarm descriptions to seach for to determine if alarms should be checked.
   *
   * If any of the alarms matching these search terms are in ALARM state, the stage transition will be closed.
   */
  readonly searchTerms: string[];

  /**
   * The name of the pipeline the Change Controller will be added to.
   */
  readonly pipelineName: string;

  /**
   * The name of the stage the Change Controller will be added to.
   */
  readonly stageName: string;
}

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
    transitionType: 'Inbound',
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
