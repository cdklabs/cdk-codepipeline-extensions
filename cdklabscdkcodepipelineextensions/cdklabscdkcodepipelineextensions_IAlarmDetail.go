// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Experimental.
type IAlarmDetail interface {
	// Experimental.
	AlarmArn() *string
	// Experimental.
	AlarmDescription() *string
	// Experimental.
	Reason() *string
	// Experimental.
	SetReason(r *string)
	// Experimental.
	State() *string
}

// The jsii proxy for IAlarmDetail
type jsiiProxy_IAlarmDetail struct {
	_ byte // padding
}

func (j *jsiiProxy_IAlarmDetail) AlarmArn() *string {
	var returns *string
	_jsii_.Get(
		j,
		"alarmArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmDetail) AlarmDescription() *string {
	var returns *string
	_jsii_.Get(
		j,
		"alarmDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmDetail) Reason() *string {
	var returns *string
	_jsii_.Get(
		j,
		"reason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlarmDetail)SetReason(val *string) {
	if err := j.validateSetReasonParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"reason",
		val,
	)
}

func (j *jsiiProxy_IAlarmDetail) State() *string {
	var returns *string
	_jsii_.Get(
		j,
		"state",
		&returns,
	)
	return returns
}

