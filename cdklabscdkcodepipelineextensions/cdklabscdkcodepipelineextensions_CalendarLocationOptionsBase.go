// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// Experimental.
type CalendarLocationOptionsBase struct {
	// Experimental.
	CalendarName *string `field:"required" json:"calendarName" yaml:"calendarName"`
	// Experimental.
	CalendarPath *string `field:"optional" json:"calendarPath" yaml:"calendarPath"`
}

