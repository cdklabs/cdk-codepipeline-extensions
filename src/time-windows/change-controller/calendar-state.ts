import { SSM } from 'aws-sdk';

export type CalendarState = {
  state: string;
  nextTransitionTime?: string;
  summary: string;
};


export const getCalendarState = async (calendarName: string): Promise<CalendarState> => {
  const fallbackNextTransitionTime = '2999-01-01T00:00:00Z';

  const ssm = new SSM();
  try {
    const result = await ssm.getCalendarState({ CalendarNames: [calendarName] }).promise();
    if (!result.State) throw new Error('getCalendarState returned an undefined state.');
    return {
      state: result.State,
      nextTransitionTime: result.NextTransitionTime ?? fallbackNextTransitionTime,
      summary: `Calendar is ${result.State} until ${result.NextTransitionTime ?? fallbackNextTransitionTime}.`,
    };
  } catch (error) {
    const summary = `Unable to retrieve calendar state for ${calendarName}.`;
    console.error(summary, error);
    return {
      state: 'CLOSED',
      nextTransitionTime: fallbackNextTransitionTime,
      summary,
    };
  }
};