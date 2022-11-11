//go:build no_runtime_type_checking

// This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.
package cdklabscdkcodepipelineextensions

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_ChangeControllerFunction) validateAddAliasParameters(aliasName *string, options *awslambda.AliasOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateAddEnvironmentParameters(key *string, value *string, options *awslambda.EnvironmentOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateAddEventSourceParameters(source awslambda.IEventSource) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateAddEventSourceMappingParameters(id *string, options *awslambda.EventSourceMappingOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateAddFunctionUrlParameters(options *awslambda.FunctionUrlOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateAddPermissionParameters(id *string, permission *awslambda.Permission) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateAddToRolePolicyParameters(statement awsiam.PolicyStatement) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateApplyRemovalPolicyParameters(policy awscdk.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateConfigureAsyncInvokeParameters(options *awslambda.EventInvokeConfigOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateConsiderWarningOnInvokeFunctionPermissionsParameters(scope constructs.Construct, action *string) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateGetResourceArnAttributeParameters(arnAttr *string, arnComponents *awscdk.ArnComponents) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateGetResourceNameAttributeParameters(nameAttr *string) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateGrantInvokeParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateGrantInvokeUrlParameters(grantee awsiam.IGrantable) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateMetricParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateMetricDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateMetricErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateMetricInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateMetricThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func (c *jsiiProxy_ChangeControllerFunction) validateWarnInvokeFunctionPermissionsParameters(scope constructs.Construct) error {
	return nil
}

func validateChangeControllerFunction_ClassifyVersionPropertyParameters(propertyName *string, locked *bool) error {
	return nil
}

func validateChangeControllerFunction_FromFunctionArnParameters(scope constructs.Construct, id *string, functionArn *string) error {
	return nil
}

func validateChangeControllerFunction_FromFunctionAttributesParameters(scope constructs.Construct, id *string, attrs *awslambda.FunctionAttributes) error {
	return nil
}

func validateChangeControllerFunction_FromFunctionNameParameters(scope constructs.Construct, id *string, functionName *string) error {
	return nil
}

func validateChangeControllerFunction_IsConstructParameters(x interface{}) error {
	return nil
}

func validateChangeControllerFunction_IsOwnedResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateChangeControllerFunction_IsResourceParameters(construct constructs.IConstruct) error {
	return nil
}

func validateChangeControllerFunction_MetricAllParameters(metricName *string, props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateChangeControllerFunction_MetricAllConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateChangeControllerFunction_MetricAllDurationParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateChangeControllerFunction_MetricAllErrorsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateChangeControllerFunction_MetricAllInvocationsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateChangeControllerFunction_MetricAllThrottlesParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateChangeControllerFunction_MetricAllUnreservedConcurrentExecutionsParameters(props *awscloudwatch.MetricOptions) error {
	return nil
}

func validateNewChangeControllerFunctionParameters(scope constructs.Construct, id *string, props *ChangeControllerFunctionProps) error {
	return nil
}

