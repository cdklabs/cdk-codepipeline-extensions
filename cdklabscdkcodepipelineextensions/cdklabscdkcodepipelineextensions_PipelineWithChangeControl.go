// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/cdklabs/cdk-codepipeline-extensions/cdklabscdkcodepipelineextensions/jsii"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/cdklabs/cdk-codepipeline-extensions/cdklabscdkcodepipelineextensions/internal"
)

// A pipeline with a change controller.
// Experimental.
type PipelineWithChangeControl interface {
	constructs.Construct
	// The tree node.
	// Experimental.
	Node() constructs.Node
	// Returns a string representation of this construct.
	// Experimental.
	ToString() *string
}

// The jsii proxy struct for PipelineWithChangeControl
type jsiiProxy_PipelineWithChangeControl struct {
	internal.Type__constructsConstruct
}

func (j *jsiiProxy_PipelineWithChangeControl) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


// Experimental.
func NewPipelineWithChangeControl(scope constructs.Construct, id *string, props *PipelineWithChangeControlProps) PipelineWithChangeControl {
	_init_.Initialize()

	if err := validateNewPipelineWithChangeControlParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_PipelineWithChangeControl{}

	_jsii_.Create(
		"@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

// Experimental.
func NewPipelineWithChangeControl_Override(p PipelineWithChangeControl, scope constructs.Construct, id *string, props *PipelineWithChangeControlProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl",
		[]interface{}{scope, id, props},
		p,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func PipelineWithChangeControl_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validatePipelineWithChangeControl_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (p *jsiiProxy_PipelineWithChangeControl) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		p,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

