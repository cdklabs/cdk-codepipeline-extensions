// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awscodepipeline"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsevents"
)

// Experimental.
type ChangeControllerProps struct {
	// Experimental.
	Calendar Calendar `field:"required" json:"calendar" yaml:"calendar"`
	// Experimental.
	Schedule awsevents.Schedule `field:"required" json:"schedule" yaml:"schedule"`
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
	// Experimental.
	Stage awscodepipeline.IStage `field:"required" json:"stage" yaml:"stage"`
}

