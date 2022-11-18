// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions


// The event inputs required for the ChangeController lambda function.
// Experimental.
type ChangeControllerEvent struct {
	// The calendar used to determine whether a stage transition should be opened or closed.
	// Experimental.
	Calendar Calendar `field:"required" json:"calendar" yaml:"calendar"`
	// The name of the pipeline the Change Controller will be added to.
	// Experimental.
	PipelineName *string `field:"required" json:"pipelineName" yaml:"pipelineName"`
	// The terms in alarm descriptions to seach for to determine if alarms should be checked.
	//
	// If any of the alarms matching these search terms are in ALARM state, the stage transition will be closed.
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
	// The name of the stage the Change Controller will be added to.
	// Experimental.
	StageName *string `field:"required" json:"stageName" yaml:"stageName"`
}

