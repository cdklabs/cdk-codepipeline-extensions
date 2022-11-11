// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// searchTerms: a list of terms to match in the alarm description.
// Experimental.
type GetAlarmStateOptions struct {
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
}

