import { randomUUID } from 'crypto';
import { CustomResource, custom_resources, Duration, IResolvable, Names } from 'aws-cdk-lib';
import { CompositeAlarm, IAlarmRule } from 'aws-cdk-lib/aws-cloudwatch';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { AutorollbackFunction } from './autorollback-function';

export interface AutoRollbackProps {
  readonly name?: string;
  readonly monitoringTime: IResolvable;
  readonly alarmRule: IAlarmRule;
}

export class AutoRollback extends Construct {
  constructor(scope: Construct, id: string, props: AutoRollbackProps) {
    super(scope, id);

    const lambdaTimeout = Duration.minutes(15);

    const pollQueue = new Queue(this, 'PollQueue', {
      visibilityTimeout: lambdaTimeout,
    });

    const lambdaFunction = new AutorollbackFunction(this, 'Handler');

    lambdaFunction.addToRolePolicy(
      new PolicyStatement({
        actions: ['cloudwatch:DescribeAlarms'],
        resources: ['*'],
        effect: Effect.ALLOW,
      }),
    );

    const alarmDescription = `[${props.name ?? ''}-${Names.uniqueResourceName(this, { separator: '-' })}]`;

    new CompositeAlarm(this, 'composite-alarm', {
      compositeAlarmName: props.name,
      alarmRule: props.alarmRule,
      alarmDescription,
    });

    const provider = new custom_resources.Provider(this, 'Provider', {
      onEventHandler: lambdaFunction,
      isCompleteHandler: lambdaFunction,
    });

    new CustomResource(this, 'Resource', {
      serviceToken: provider.serviceToken,
      properties: {
        monitoringTime: props.monitoringTime,
        searchTerms: alarmDescription,
        queueUrl: pollQueue.queueUrl,
        nonce: randomUUID(), // this ensures that the resource is always a part of the stack update
      },
    });
  }
}