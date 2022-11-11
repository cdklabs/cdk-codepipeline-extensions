//go:build !no_runtime_type_checking

// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	"fmt"
)

func (j *jsiiProxy_IAlarmDetail) validateSetReasonParameters(val *string) error {
	if val == nil {
		return fmt.Errorf("parameter val is required, but nil was provided")
	}

	return nil
}

