// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awscodecommit"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsevents"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
)

// Props for creating a pipeline with a change controller.
// Experimental.
type PipelineWithChangeControlProps struct {
	// The calendar used for determining time windows.
	// Experimental.
	ChangeControlCalendar Calendar `field:"required" json:"changeControlCalendar" yaml:"changeControlCalendar"`
	// The schedule on which to check the calendar.
	// Experimental.
	ChangeControlCheckSchedule awsevents.Schedule `field:"required" json:"changeControlCheckSchedule" yaml:"changeControlCheckSchedule"`
	// The name of the pipeline.
	// Experimental.
	PipelineName *string `field:"required" json:"pipelineName" yaml:"pipelineName"`
	// The terms in the alarm descriptions to search for.
	//
	// These if the alarms containing those search terms are in ALARM,
	// the stage transition will be closed.
	// Experimental.
	SearchTerms *[]*string `field:"required" json:"searchTerms" yaml:"searchTerms"`
	// The AWS CodeCommit repository to be used as the source stage.
	// Experimental.
	SourceRepository awscodecommit.IRepository `field:"required" json:"sourceRepository" yaml:"sourceRepository"`
	// The role used for running the pipeline.
	// Experimental.
	PipelineRole awsiam.IRole `field:"optional" json:"pipelineRole" yaml:"pipelineRole"`
}

