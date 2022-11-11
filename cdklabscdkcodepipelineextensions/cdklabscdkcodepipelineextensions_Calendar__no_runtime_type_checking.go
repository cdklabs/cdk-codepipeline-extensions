//go:build no_runtime_type_checking

// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

// Building without runtime type checking enabled, so all the below just return nil

func validateCalendar_PathParameters(options *LocalPathOptions) error {
	return nil
}

func validateCalendar_S3LocationParameters(options *S3LocationOptions) error {
	return nil
}

func (j *jsiiProxy_Calendar) validateSetCalendarArnParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Calendar) validateSetCalendarNameParameters(val *string) error {
	return nil
}

