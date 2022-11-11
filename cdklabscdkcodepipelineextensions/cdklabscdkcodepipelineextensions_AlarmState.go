// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// Experimental.
type AlarmState string

const (
	// Experimental.
	AlarmState_OK AlarmState = "OK"
	// Experimental.
	AlarmState_ALARM AlarmState = "ALARM"
	// Experimental.
	AlarmState_INSUFFICIENT_DATA AlarmState = "INSUFFICIENT_DATA"
)

