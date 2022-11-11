package cdklabscdkcodepipelineextensions

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState",
		reflect.TypeOf((*AggregateAlarmState)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@cdklabs/cdk-codepipeline-extensions.AlarmState",
		reflect.TypeOf((*AlarmState)(nil)).Elem(),
		map[string]interface{}{
			"OK": AlarmState_OK,
			"ALARM": AlarmState_ALARM,
			"INSUFFICIENT_DATA": AlarmState_INSUFFICIENT_DATA,
		},
	)
	_jsii_.RegisterClass(
		"@cdklabs/cdk-codepipeline-extensions.Calendar",
		reflect.TypeOf((*Calendar)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "calendarArn", GoGetter: "CalendarArn"},
			_jsii_.MemberProperty{JsiiProperty: "calendarName", GoGetter: "CalendarName"},
		},
		func() interface{} {
			return &jsiiProxy_Calendar{}
		},
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.CalendarLocationOptionsBase",
		reflect.TypeOf((*CalendarLocationOptionsBase)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction",
		reflect.TypeOf((*CalendarSetupFunction)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addAlias", GoMethod: "AddAlias"},
			_jsii_.MemberMethod{JsiiMethod: "addEnvironment", GoMethod: "AddEnvironment"},
			_jsii_.MemberMethod{JsiiMethod: "addEventSource", GoMethod: "AddEventSource"},
			_jsii_.MemberMethod{JsiiMethod: "addEventSourceMapping", GoMethod: "AddEventSourceMapping"},
			_jsii_.MemberMethod{JsiiMethod: "addFunctionUrl", GoMethod: "AddFunctionUrl"},
			_jsii_.MemberMethod{JsiiMethod: "addLayers", GoMethod: "AddLayers"},
			_jsii_.MemberMethod{JsiiMethod: "addPermission", GoMethod: "AddPermission"},
			_jsii_.MemberMethod{JsiiMethod: "addToRolePolicy", GoMethod: "AddToRolePolicy"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "architecture", GoGetter: "Architecture"},
			_jsii_.MemberProperty{JsiiProperty: "canCreatePermissions", GoGetter: "CanCreatePermissions"},
			_jsii_.MemberMethod{JsiiMethod: "configureAsyncInvoke", GoMethod: "ConfigureAsyncInvoke"},
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberMethod{JsiiMethod: "considerWarningOnInvokeFunctionPermissions", GoMethod: "ConsiderWarningOnInvokeFunctionPermissions"},
			_jsii_.MemberProperty{JsiiProperty: "currentVersion", GoGetter: "CurrentVersion"},
			_jsii_.MemberProperty{JsiiProperty: "deadLetterQueue", GoGetter: "DeadLetterQueue"},
			_jsii_.MemberProperty{JsiiProperty: "deadLetterTopic", GoGetter: "DeadLetterTopic"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "functionArn", GoGetter: "FunctionArn"},
			_jsii_.MemberProperty{JsiiProperty: "functionName", GoGetter: "FunctionName"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceArnAttribute", GoMethod: "GetResourceArnAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceNameAttribute", GoMethod: "GetResourceNameAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "grantInvoke", GoMethod: "GrantInvoke"},
			_jsii_.MemberMethod{JsiiMethod: "grantInvokeUrl", GoMethod: "GrantInvokeUrl"},
			_jsii_.MemberProperty{JsiiProperty: "grantPrincipal", GoGetter: "GrantPrincipal"},
			_jsii_.MemberProperty{JsiiProperty: "isBoundToVpc", GoGetter: "IsBoundToVpc"},
			_jsii_.MemberProperty{JsiiProperty: "latestVersion", GoGetter: "LatestVersion"},
			_jsii_.MemberProperty{JsiiProperty: "logGroup", GoGetter: "LogGroup"},
			_jsii_.MemberMethod{JsiiMethod: "metric", GoMethod: "Metric"},
			_jsii_.MemberMethod{JsiiMethod: "metricDuration", GoMethod: "MetricDuration"},
			_jsii_.MemberMethod{JsiiMethod: "metricErrors", GoMethod: "MetricErrors"},
			_jsii_.MemberMethod{JsiiMethod: "metricInvocations", GoMethod: "MetricInvocations"},
			_jsii_.MemberMethod{JsiiMethod: "metricThrottles", GoMethod: "MetricThrottles"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "permissionsNode", GoGetter: "PermissionsNode"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberProperty{JsiiProperty: "resourceArnsForGrantInvoke", GoGetter: "ResourceArnsForGrantInvoke"},
			_jsii_.MemberProperty{JsiiProperty: "role", GoGetter: "Role"},
			_jsii_.MemberProperty{JsiiProperty: "runtime", GoGetter: "Runtime"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberProperty{JsiiProperty: "timeout", GoGetter: "Timeout"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "warnInvokeFunctionPermissions", GoMethod: "WarnInvokeFunctionPermissions"},
		},
		func() interface{} {
			j := jsiiProxy_CalendarSetupFunction{}
			_jsii_.InitJsiiProxy(&j.Type__awslambdaFunction)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps",
		reflect.TypeOf((*CalendarSetupFunctionProps)(nil)).Elem(),
	)
	_jsii_.RegisterEnum(
		"@cdklabs/cdk-codepipeline-extensions.CalendarSourceType",
		reflect.TypeOf((*CalendarSourceType)(nil)).Elem(),
		map[string]interface{}{
			"S3_OBJECT": CalendarSourceType_S3_OBJECT,
			"PATH": CalendarSourceType_PATH,
		},
	)
	_jsii_.RegisterClass(
		"@cdklabs/cdk-codepipeline-extensions.ChangeController",
		reflect.TypeOf((*ChangeController)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_ChangeController{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent",
		reflect.TypeOf((*ChangeControllerEvent)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction",
		reflect.TypeOf((*ChangeControllerFunction)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addAlias", GoMethod: "AddAlias"},
			_jsii_.MemberMethod{JsiiMethod: "addEnvironment", GoMethod: "AddEnvironment"},
			_jsii_.MemberMethod{JsiiMethod: "addEventSource", GoMethod: "AddEventSource"},
			_jsii_.MemberMethod{JsiiMethod: "addEventSourceMapping", GoMethod: "AddEventSourceMapping"},
			_jsii_.MemberMethod{JsiiMethod: "addFunctionUrl", GoMethod: "AddFunctionUrl"},
			_jsii_.MemberMethod{JsiiMethod: "addLayers", GoMethod: "AddLayers"},
			_jsii_.MemberMethod{JsiiMethod: "addPermission", GoMethod: "AddPermission"},
			_jsii_.MemberMethod{JsiiMethod: "addToRolePolicy", GoMethod: "AddToRolePolicy"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "architecture", GoGetter: "Architecture"},
			_jsii_.MemberProperty{JsiiProperty: "canCreatePermissions", GoGetter: "CanCreatePermissions"},
			_jsii_.MemberMethod{JsiiMethod: "configureAsyncInvoke", GoMethod: "ConfigureAsyncInvoke"},
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberMethod{JsiiMethod: "considerWarningOnInvokeFunctionPermissions", GoMethod: "ConsiderWarningOnInvokeFunctionPermissions"},
			_jsii_.MemberProperty{JsiiProperty: "currentVersion", GoGetter: "CurrentVersion"},
			_jsii_.MemberProperty{JsiiProperty: "deadLetterQueue", GoGetter: "DeadLetterQueue"},
			_jsii_.MemberProperty{JsiiProperty: "deadLetterTopic", GoGetter: "DeadLetterTopic"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "functionArn", GoGetter: "FunctionArn"},
			_jsii_.MemberProperty{JsiiProperty: "functionName", GoGetter: "FunctionName"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceArnAttribute", GoMethod: "GetResourceArnAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceNameAttribute", GoMethod: "GetResourceNameAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "grantInvoke", GoMethod: "GrantInvoke"},
			_jsii_.MemberMethod{JsiiMethod: "grantInvokeUrl", GoMethod: "GrantInvokeUrl"},
			_jsii_.MemberProperty{JsiiProperty: "grantPrincipal", GoGetter: "GrantPrincipal"},
			_jsii_.MemberProperty{JsiiProperty: "isBoundToVpc", GoGetter: "IsBoundToVpc"},
			_jsii_.MemberProperty{JsiiProperty: "latestVersion", GoGetter: "LatestVersion"},
			_jsii_.MemberProperty{JsiiProperty: "logGroup", GoGetter: "LogGroup"},
			_jsii_.MemberMethod{JsiiMethod: "metric", GoMethod: "Metric"},
			_jsii_.MemberMethod{JsiiMethod: "metricDuration", GoMethod: "MetricDuration"},
			_jsii_.MemberMethod{JsiiMethod: "metricErrors", GoMethod: "MetricErrors"},
			_jsii_.MemberMethod{JsiiMethod: "metricInvocations", GoMethod: "MetricInvocations"},
			_jsii_.MemberMethod{JsiiMethod: "metricThrottles", GoMethod: "MetricThrottles"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "permissionsNode", GoGetter: "PermissionsNode"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberProperty{JsiiProperty: "resourceArnsForGrantInvoke", GoGetter: "ResourceArnsForGrantInvoke"},
			_jsii_.MemberProperty{JsiiProperty: "role", GoGetter: "Role"},
			_jsii_.MemberProperty{JsiiProperty: "runtime", GoGetter: "Runtime"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberProperty{JsiiProperty: "timeout", GoGetter: "Timeout"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "warnInvokeFunctionPermissions", GoMethod: "WarnInvokeFunctionPermissions"},
		},
		func() interface{} {
			j := jsiiProxy_ChangeControllerFunction{}
			_jsii_.InitJsiiProxy(&j.Type__awslambdaFunction)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps",
		reflect.TypeOf((*ChangeControllerFunctionProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps",
		reflect.TypeOf((*ChangeControllerProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.GetAlarmStateOptions",
		reflect.TypeOf((*GetAlarmStateOptions)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@cdklabs/cdk-codepipeline-extensions.IAlarmDetail",
		reflect.TypeOf((*IAlarmDetail)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "alarmArn", GoGetter: "AlarmArn"},
			_jsii_.MemberProperty{JsiiProperty: "alarmDescription", GoGetter: "AlarmDescription"},
			_jsii_.MemberProperty{JsiiProperty: "reason", GoGetter: "Reason"},
			_jsii_.MemberProperty{JsiiProperty: "state", GoGetter: "State"},
		},
		func() interface{} {
			return &jsiiProxy_IAlarmDetail{}
		},
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.LocalPathOptions",
		reflect.TypeOf((*LocalPathOptions)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl",
		reflect.TypeOf((*PipelineWithChangeControl)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_PipelineWithChangeControl{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps",
		reflect.TypeOf((*PipelineWithChangeControlProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@cdklabs/cdk-codepipeline-extensions.S3LocationOptions",
		reflect.TypeOf((*S3LocationOptions)(nil)).Elem(),
	)
}
