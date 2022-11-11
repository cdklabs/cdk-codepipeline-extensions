// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// The source types for the calendar file.
// Experimental.
type CalendarSourceType string

const (
	// The calendar source is an S3 Bucket.
	// Experimental.
	CalendarSourceType_S3_OBJECT CalendarSourceType = "S3_OBJECT"
	// The calendar source is a local path.
	// Experimental.
	CalendarSourceType_PATH CalendarSourceType = "PATH"
)

