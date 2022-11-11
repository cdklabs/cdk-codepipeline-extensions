// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// Experimental.
type CalendarSourceType string

const (
	// Experimental.
	CalendarSourceType_S3_OBJECT CalendarSourceType = "S3_OBJECT"
	// Experimental.
	CalendarSourceType_PATH CalendarSourceType = "PATH"
)

