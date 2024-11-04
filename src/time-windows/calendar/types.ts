/**
 * The source types for the calendar file.
 */
export enum CalendarSourceType {
  /**
   * The calendar source is an S3 Bucket.
   */
  S3_OBJECT = 's3Object',

  /**
   * The calendar source is a local path.
   */
  PATH = 'path',
}
