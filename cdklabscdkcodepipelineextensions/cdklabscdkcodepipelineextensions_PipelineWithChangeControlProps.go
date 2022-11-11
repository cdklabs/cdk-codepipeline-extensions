// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awscodecommit"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsevents"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
)

// Experimental.
type PipelineWithChangeControlProps struct {
	// Experimental.
	ChangeControlCalendar Calendar `field:"required" json:"changeControlCalendar" yaml:"changeControlCalendar"`
	// Experimental.
	ChangeControlCheckSchedule awsevents.Schedule `field:"required" json:"changeControlCheckSchedule" yaml:"changeControlCheckSchedule"`
	// Experimental.
	PipelineName *string `field:"required" json:"pipelineName" yaml:"pipelineName"`
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
	// Experimental.
	SourceRepository awscodecommit.IRepository `field:"required" json:"sourceRepository" yaml:"sourceRepository"`
	// Experimental.
	PipelineRole awsiam.IRole `field:"optional" json:"pipelineRole" yaml:"pipelineRole"`
}

