// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// Experimental.
type ChangeControllerEvent struct {
	// Experimental.
	Calendar Calendar `field:"required" json:"calendar" yaml:"calendar"`
	// Experimental.
	PipelineName *string `field:"required" json:"pipelineName" yaml:"pipelineName"`
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
	// Experimental.
	StageName *string `field:"required" json:"stageName" yaml:"stageName"`
}

