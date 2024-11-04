import type { Calendar } from '../calendar/calendar';

/**
 * The event inputs required for the ChangeController lambda function.
 */
export interface ChangeControllerEvent {
  /**
   * The calendar used to determine whether a stage transition should be opened or closed.
   */
  readonly calendar: Calendar;

  /**
   * The terms in alarm descriptions to search for to determine if alarms should be checked.
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
