// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awscodepipeline"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsevents"
)

// Properties used to create change controller.
// Experimental.
type ChangeControllerProps struct {
	// The calendar object.
	// Experimental.
	Calendar Calendar `field:"required" json:"calendar" yaml:"calendar"`
	// The schedule on which to check the calendar and alarm state.
	// Experimental.
	Schedule awsevents.Schedule `field:"required" json:"schedule" yaml:"schedule"`
	// The terms to search for in alarm descriptions.
	//
	// These if these alarms are in ALARM state, the change controller will close
	// the pipeline stage.
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
	// The pipeline stage.
	// Experimental.
	Stage awscodepipeline.IStage `field:"required" json:"stage" yaml:"stage"`
}

