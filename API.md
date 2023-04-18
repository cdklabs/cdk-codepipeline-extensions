## CDK CodePipeline Extensions

This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.


# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CalendarSetupFunction <a name="CalendarSetupFunction" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction"></a>

An AWS Lambda function which executes src/time-windows/calendar/calendar-setup.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

new CalendarSetupFunction(scope: Construct, id: string, props?: CalendarSetupFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps">CalendarSetupFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps">CalendarSetupFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the @aws-cdk/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from '@aws-cdk/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
   aliasName: 'Live',
   version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isConstruct"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isOwnedResource"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isResource"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.classifyVersionProperty"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionArn"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionAttributes"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionName"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAll"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllConcurrentExecutions"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllDuration"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllErrors"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllInvocations"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllThrottles"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { CalendarSetupFunction } from '@cdklabs/cdk-codepipeline-extensions'

CalendarSetupFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


### ChangeController <a name="ChangeController" id="@cdklabs/cdk-codepipeline-extensions.ChangeController"></a>

A change controller.

When added to a stage in a pipeline, this will check against
a calendar and enable or disable the stage transition based off that calendar,
defaulting to closed when the calendar cannot be found or when
the check against it fails. It also checks to against alarms.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer"></a>

```typescript
import { ChangeController } from '@cdklabs/cdk-codepipeline-extensions'

new ChangeController(scope: Construct, id: string, props: ChangeControllerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps">ChangeControllerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps">ChangeControllerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeController.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeController.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.isConstruct"></a>

```typescript
import { ChangeController } from '@cdklabs/cdk-codepipeline-extensions'

ChangeController.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeController.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-codepipeline-extensions.ChangeController.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### ChangeControllerFunction <a name="ChangeControllerFunction" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction"></a>

An AWS Lambda function which executes src/time-windows/change-controller/change-controller.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

new ChangeControllerFunction(scope: Construct, id: string, props?: ChangeControllerFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps">ChangeControllerFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps">ChangeControllerFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the @aws-cdk/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from '@aws-cdk/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
   aliasName: 'Live',
   version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addLayers"></a>

```typescript
public addLayers(layers: ILayerVersion): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.addLayers.parameter.layers"></a>

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

the layers to be added.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isConstruct"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isOwnedResource"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isResource"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.classifyVersionProperty"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionArn"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionAttributes"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionName"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAll"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllConcurrentExecutions"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllDuration"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllErrors"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllInvocations"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllThrottles"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { ChangeControllerFunction } from '@cdklabs/cdk-codepipeline-extensions'

ChangeControllerFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---


### PipelineWithChangeControl <a name="PipelineWithChangeControl" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl"></a>

A pipeline with a change controller.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer"></a>

```typescript
import { PipelineWithChangeControl } from '@cdklabs/cdk-codepipeline-extensions'

new PipelineWithChangeControl(scope: Construct, id: string, props: PipelineWithChangeControlProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer.parameter.props">props</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps">PipelineWithChangeControlProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps">PipelineWithChangeControlProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.isConstruct"></a>

```typescript
import { PipelineWithChangeControl } from '@cdklabs/cdk-codepipeline-extensions'

PipelineWithChangeControl.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### AggregateAlarmState <a name="AggregateAlarmState" id="@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState"></a>

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.Initializer"></a>

```typescript
import { AggregateAlarmState } from '@cdklabs/cdk-codepipeline-extensions'

const aggregateAlarmState: AggregateAlarmState = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.property.alarmDetails">alarmDetails</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail">IAlarmDetail</a>[]</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.property.state">state</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.AlarmState">AlarmState</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.property.summary">summary</a></code> | <code>string</code> | *No description.* |

---

##### `alarmDetails`<sup>Required</sup> <a name="alarmDetails" id="@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.property.alarmDetails"></a>

```typescript
public readonly alarmDetails: IAlarmDetail[];
```

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail">IAlarmDetail</a>[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.property.state"></a>

```typescript
public readonly state: AlarmState;
```

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.AlarmState">AlarmState</a>

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdklabs/cdk-codepipeline-extensions.AggregateAlarmState.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

### CalendarLocationOptionsBase <a name="CalendarLocationOptionsBase" id="@cdklabs/cdk-codepipeline-extensions.CalendarLocationOptionsBase"></a>

Options for creating a calendar object.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.CalendarLocationOptionsBase.Initializer"></a>

```typescript
import { CalendarLocationOptionsBase } from '@cdklabs/cdk-codepipeline-extensions'

const calendarLocationOptionsBase: CalendarLocationOptionsBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarLocationOptionsBase.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar file. |

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="@cdklabs/cdk-codepipeline-extensions.CalendarLocationOptionsBase.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar file.

---

### CalendarSetupFunctionProps <a name="CalendarSetupFunctionProps" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps"></a>

Props for CalendarSetupFunction.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.Initializer"></a>

```typescript
import { CalendarSetupFunctionProps } from '@cdklabs/cdk-codepipeline-extensions'

const calendarSetupFunctionProps: CalendarSetupFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-codepipeline-extensions.CalendarSetupFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

### ChangeControllerEvent <a name="ChangeControllerEvent" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent"></a>

The event inputs required for the ChangeController lambda function.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.Initializer"></a>

```typescript
import { ChangeControllerEvent } from '@cdklabs/cdk-codepipeline-extensions'

const changeControllerEvent: ChangeControllerEvent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.calendar">calendar</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar">Calendar</a></code> | The calendar used to determine whether a stage transition should be opened or closed. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline the Change Controller will be added to. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.searchTerms">searchTerms</a></code> | <code>string[]</code> | The terms in alarm descriptions to seach for to determine if alarms should be checked. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage the Change Controller will be added to. |

---

##### `calendar`<sup>Required</sup> <a name="calendar" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.calendar"></a>

```typescript
public readonly calendar: Calendar;
```

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.Calendar">Calendar</a>

The calendar used to determine whether a stage transition should be opened or closed.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline the Change Controller will be added to.

---

##### `searchTerms`<sup>Required</sup> <a name="searchTerms" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.searchTerms"></a>

```typescript
public readonly searchTerms: string[];
```

- *Type:* string[]

The terms in alarm descriptions to seach for to determine if alarms should be checked.

If any of the alarms matching these search terms are in ALARM state, the stage transition will be closed.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerEvent.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage the Change Controller will be added to.

---

### ChangeControllerFunctionProps <a name="ChangeControllerFunctionProps" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps"></a>

Props for ChangeControllerFunction.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.Initializer"></a>

```typescript
import { ChangeControllerFunctionProps } from '@cdklabs/cdk-codepipeline-extensions'

const changeControllerFunctionProps: ChangeControllerFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfig</code> | Code signing config associated with this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic.

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfig
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

### ChangeControllerProps <a name="ChangeControllerProps" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps"></a>

Properties used to create change controller.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.Initializer"></a>

```typescript
import { ChangeControllerProps } from '@cdklabs/cdk-codepipeline-extensions'

const changeControllerProps: ChangeControllerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.calendar">calendar</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar">Calendar</a></code> | The calendar object. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule on which to check the calendar and alarm state. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.searchTerms">searchTerms</a></code> | <code>string[]</code> | The terms to search for in alarm descriptions. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.stage">stage</a></code> | <code>aws-cdk-lib.aws_codepipeline.IStage</code> | The pipeline stage. |

---

##### `calendar`<sup>Required</sup> <a name="calendar" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.calendar"></a>

```typescript
public readonly calendar: Calendar;
```

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.Calendar">Calendar</a>

The calendar object.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule on which to check the calendar and alarm state.

---

##### `searchTerms`<sup>Required</sup> <a name="searchTerms" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.searchTerms"></a>

```typescript
public readonly searchTerms: string[];
```

- *Type:* string[]

The terms to search for in alarm descriptions.

These if these alarms are in ALARM state, the change controller will close
the pipeline stage.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdklabs/cdk-codepipeline-extensions.ChangeControllerProps.property.stage"></a>

```typescript
public readonly stage: IStage;
```

- *Type:* aws-cdk-lib.aws_codepipeline.IStage

The pipeline stage.

---

### GetAlarmStateOptions <a name="GetAlarmStateOptions" id="@cdklabs/cdk-codepipeline-extensions.GetAlarmStateOptions"></a>

searchTerms: a list of terms to match in the alarm description.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.GetAlarmStateOptions.Initializer"></a>

```typescript
import { GetAlarmStateOptions } from '@cdklabs/cdk-codepipeline-extensions'

const getAlarmStateOptions: GetAlarmStateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.GetAlarmStateOptions.property.searchTerms">searchTerms</a></code> | <code>string[]</code> | *No description.* |

---

##### `searchTerms`<sup>Required</sup> <a name="searchTerms" id="@cdklabs/cdk-codepipeline-extensions.GetAlarmStateOptions.property.searchTerms"></a>

```typescript
public readonly searchTerms: string[];
```

- *Type:* string[]

---

### LocalPathOptions <a name="LocalPathOptions" id="@cdklabs/cdk-codepipeline-extensions.LocalPathOptions"></a>

Options for creating a calendar from a local file path.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.LocalPathOptions.Initializer"></a>

```typescript
import { LocalPathOptions } from '@cdklabs/cdk-codepipeline-extensions'

const localPathOptions: LocalPathOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.LocalPathOptions.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar file. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.LocalPathOptions.property.calendarPath">calendarPath</a></code> | <code>string</code> | The relative path to the calendar file. |

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="@cdklabs/cdk-codepipeline-extensions.LocalPathOptions.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar file.

---

##### `calendarPath`<sup>Required</sup> <a name="calendarPath" id="@cdklabs/cdk-codepipeline-extensions.LocalPathOptions.property.calendarPath"></a>

```typescript
public readonly calendarPath: string;
```

- *Type:* string

The relative path to the calendar file.

---

### PipelineWithChangeControlProps <a name="PipelineWithChangeControlProps" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps"></a>

Props for creating a pipeline with a change controller.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.Initializer"></a>

```typescript
import { PipelineWithChangeControlProps } from '@cdklabs/cdk-codepipeline-extensions'

const pipelineWithChangeControlProps: PipelineWithChangeControlProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.changeControlCalendar">changeControlCalendar</a></code> | <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar">Calendar</a></code> | The calendar used for determining time windows. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.changeControlCheckSchedule">changeControlCheckSchedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule on which to check the calendar. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | The name of the pipeline. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.searchTerms">searchTerms</a></code> | <code>string[]</code> | The terms in the alarm descriptions to search for. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.sourceRepository">sourceRepository</a></code> | <code>aws-cdk-lib.aws_codecommit.IRepository</code> | The AWS CodeCommit repository to be used as the source stage. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.pipelineRole">pipelineRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used for running the pipeline. |

---

##### `changeControlCalendar`<sup>Required</sup> <a name="changeControlCalendar" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.changeControlCalendar"></a>

```typescript
public readonly changeControlCalendar: Calendar;
```

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.Calendar">Calendar</a>

The calendar used for determining time windows.

---

##### `changeControlCheckSchedule`<sup>Required</sup> <a name="changeControlCheckSchedule" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.changeControlCheckSchedule"></a>

```typescript
public readonly changeControlCheckSchedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

The schedule on which to check the calendar.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

The name of the pipeline.

---

##### `searchTerms`<sup>Required</sup> <a name="searchTerms" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.searchTerms"></a>

```typescript
public readonly searchTerms: string[];
```

- *Type:* string[]

The terms in the alarm descriptions to search for.

These if the alarms containing those search terms are in ALARM,
the stage transition will be closed.

---

##### `sourceRepository`<sup>Required</sup> <a name="sourceRepository" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.sourceRepository"></a>

```typescript
public readonly sourceRepository: IRepository;
```

- *Type:* aws-cdk-lib.aws_codecommit.IRepository

The AWS CodeCommit repository to be used as the source stage.

---

##### `pipelineRole`<sup>Optional</sup> <a name="pipelineRole" id="@cdklabs/cdk-codepipeline-extensions.PipelineWithChangeControlProps.property.pipelineRole"></a>

```typescript
public readonly pipelineRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created when the pipeline is created.

The role used for running the pipeline.

---

### S3LocationOptions <a name="S3LocationOptions" id="@cdklabs/cdk-codepipeline-extensions.S3LocationOptions"></a>

Options for creating a calendar from a file in a S3 Bucket.

#### Initializer <a name="Initializer" id="@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.Initializer"></a>

```typescript
import { S3LocationOptions } from '@cdklabs/cdk-codepipeline-extensions'

const s3LocationOptions: S3LocationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar file. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket where the calendar is stored. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used for getting the calendar file. |

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar file.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where the calendar is stored.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/cdk-codepipeline-extensions.S3LocationOptions.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role created by the Custom Resource.

The role used for getting the calendar file.

---

## Classes <a name="Classes" id="Classes"></a>

### Calendar <a name="Calendar" id="@cdklabs/cdk-codepipeline-extensions.Calendar"></a>

The calendar for determining if pipeline stage should be open or closed.

#### Initializers <a name="Initializers" id="@cdklabs/cdk-codepipeline-extensions.Calendar.Initializer"></a>

```typescript
import { Calendar } from '@cdklabs/cdk-codepipeline-extensions'

new Calendar()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar.path">path</a></code> | Creates a calendar from a local file. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar.s3Location">s3Location</a></code> | Creates a calendar from a S3 bucket. |

---

##### `path` <a name="path" id="@cdklabs/cdk-codepipeline-extensions.Calendar.path"></a>

```typescript
import { Calendar } from '@cdklabs/cdk-codepipeline-extensions'

Calendar.path(options: LocalPathOptions)
```

Creates a calendar from a local file.

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.Calendar.path.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.LocalPathOptions">LocalPathOptions</a>

---

##### `s3Location` <a name="s3Location" id="@cdklabs/cdk-codepipeline-extensions.Calendar.s3Location"></a>

```typescript
import { Calendar } from '@cdklabs/cdk-codepipeline-extensions'

Calendar.s3Location(options: S3LocationOptions)
```

Creates a calendar from a S3 bucket.

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/cdk-codepipeline-extensions.Calendar.s3Location.parameter.options"></a>

- *Type:* <a href="#@cdklabs/cdk-codepipeline-extensions.S3LocationOptions">S3LocationOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar.property.calendarArn">calendarArn</a></code> | <code>string</code> | The ARN of the calendar in SSM. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.Calendar.property.calendarName">calendarName</a></code> | <code>string</code> | The name of the calendar. |

---

##### `calendarArn`<sup>Required</sup> <a name="calendarArn" id="@cdklabs/cdk-codepipeline-extensions.Calendar.property.calendarArn"></a>

```typescript
public readonly calendarArn: string;
```

- *Type:* string

The ARN of the calendar in SSM.

---

##### `calendarName`<sup>Required</sup> <a name="calendarName" id="@cdklabs/cdk-codepipeline-extensions.Calendar.property.calendarName"></a>

```typescript
public readonly calendarName: string;
```

- *Type:* string

The name of the calendar.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAlarmDetail <a name="IAlarmDetail" id="@cdklabs/cdk-codepipeline-extensions.IAlarmDetail"></a>

- *Implemented By:* <a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail">IAlarmDetail</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.alarmArn">alarmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.reason">reason</a></code> | <code>string</code> | *No description.* |

---

##### `state`<sup>Required</sup> <a name="state" id="@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `alarmArn`<sup>Optional</sup> <a name="alarmArn" id="@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.alarmArn"></a>

```typescript
public readonly alarmArn: string;
```

- *Type:* string

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdklabs/cdk-codepipeline-extensions.IAlarmDetail.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### AlarmState <a name="AlarmState" id="@cdklabs/cdk-codepipeline-extensions.AlarmState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.AlarmState.OK">OK</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.AlarmState.ALARM">ALARM</a></code> | *No description.* |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.AlarmState.INSUFFICIENT_DATA">INSUFFICIENT_DATA</a></code> | *No description.* |

---

##### `OK` <a name="OK" id="@cdklabs/cdk-codepipeline-extensions.AlarmState.OK"></a>

---


##### `ALARM` <a name="ALARM" id="@cdklabs/cdk-codepipeline-extensions.AlarmState.ALARM"></a>

---


##### `INSUFFICIENT_DATA` <a name="INSUFFICIENT_DATA" id="@cdklabs/cdk-codepipeline-extensions.AlarmState.INSUFFICIENT_DATA"></a>

---


### CalendarSourceType <a name="CalendarSourceType" id="@cdklabs/cdk-codepipeline-extensions.CalendarSourceType"></a>

The source types for the calendar file.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSourceType.S3_OBJECT">S3_OBJECT</a></code> | The calendar source is an S3 Bucket. |
| <code><a href="#@cdklabs/cdk-codepipeline-extensions.CalendarSourceType.PATH">PATH</a></code> | The calendar source is a local path. |

---

##### `S3_OBJECT` <a name="S3_OBJECT" id="@cdklabs/cdk-codepipeline-extensions.CalendarSourceType.S3_OBJECT"></a>

The calendar source is an S3 Bucket.

---


##### `PATH` <a name="PATH" id="@cdklabs/cdk-codepipeline-extensions.CalendarSourceType.PATH"></a>

The calendar source is a local path.

---

