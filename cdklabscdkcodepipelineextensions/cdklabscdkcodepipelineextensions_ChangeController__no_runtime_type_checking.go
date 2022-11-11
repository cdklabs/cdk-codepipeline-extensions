//go:build no_runtime_type_checking

// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

// Building without runtime type checking enabled, so all the below just return nil

func validateChangeController_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewChangeControllerParameters(scope constructs.Construct, id *string, props *ChangeControllerProps) error {
	return nil
}

