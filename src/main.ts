import { App, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Alarm, Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { Code, Repository } from 'aws-cdk-lib/aws-codecommit';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';
import { PipelineWithChangeControl } from './pipelines/simple-pipeline-with-change-control';
import { Calendar } from './time-windows/calendar/calendar';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const repositoryName: string = 'CodeCommitSUUUCKS';
    const sourceRepository = new Repository(this, 'Repository', {
      repositoryName,
      code: Code.fromDirectory('../codepipeline-enhancements', 'main'),
    });

    const metric = new Metric({
      namespace: 'DOP-401',
      metricName: 'SomethingBroke',
    });

    new Alarm(this, 'alarm', {
      metric,
      alarmName: 'something-broke-alarm',
      alarmDescription: 'no-deploy',
      threshold: 1,
      evaluationPeriods: 1,
    });

    new PipelineWithChangeControl(this, 'PipelineWithChangeControl', {
      changeControlCalendar: Calendar.path({
        calendarName: 'output.ics',
      }),
      pipelineName: 'PipelineWithChangeControl',
      sourceRepository,
      changeControlCheckSchedule: Schedule.rate(Duration.minutes(1)),
      searchTerms: ['no-deploy'],
    });
  }
};

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'demo-pipeline', { env: devEnv });

app.synth();