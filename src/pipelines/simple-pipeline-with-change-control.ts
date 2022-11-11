import {
  BuildSpec,
  ComputeType,
  LinuxBuildImage,
  PipelineProject,
} from 'aws-cdk-lib/aws-codebuild';
import { IRepository } from 'aws-cdk-lib/aws-codecommit';
import { Artifact, Pipeline } from 'aws-cdk-lib/aws-codepipeline';
import {
  CodeBuildAction,
  CodeCommitSourceAction,
  CodeCommitTrigger,
} from 'aws-cdk-lib/aws-codepipeline-actions';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { Calendar } from '../time-windows/calendar/calendar';
import { ChangeController } from '../time-windows/change-controller/change-controller';

export interface PipelineWithChangeControlProps {
  readonly changeControlCalendar: Calendar;
  readonly pipelineName: string;
  readonly pipelineRole?: IRole;
  readonly sourceRepository: IRepository;
  readonly changeControlCheckSchedule: Schedule;
  readonly searchTerms: string[];
}

export class PipelineWithChangeControl extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: PipelineWithChangeControlProps
  ) {
    super(scope, id);

    const sourceOutput = new Artifact('SourceOutput');
    const buildOutput = new Artifact('BuildOutput');

    const pipeline = new Pipeline(this, 'Pipeline', {
      pipelineName: props.pipelineName,
      role: props.pipelineRole,
    });

    // Source Stage
    const sourceStage = pipeline.addStage({
      stageName: 'Source',
    });

    const sourceAction = new CodeCommitSourceAction({
      actionName: 'CodeCommitSource',
      branch: 'main',
      trigger: CodeCommitTrigger.EVENTS,
      repository: props.sourceRepository,
      output: sourceOutput,
    });

    sourceStage.addAction(sourceAction);

    // Build stage
    const buildStage = pipeline.addStage({
      stageName: 'Build',
    });

    const buildProject = new PipelineProject(this, 'BuildStageProject', {
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 16,
            },
            // eslint-disable-next-line quote-props
            commands: ['yarn install'],
          },
          build: {
            commands: ['echo Build started on `date`', 'yarn build'],
          },
          post_build: {
            commands: ['echo Build completed on `date`'],
          },
        },
        artifacts: {
          files: ['build/**/*', 'node_modules/**/*', 'src/*'],
        },
      }),
      environment: {
        buildImage: LinuxBuildImage.AMAZON_LINUX_2_4,
        privileged: true,
        computeType: ComputeType.SMALL,
      },
    });

    const buildAction = new CodeBuildAction({
      actionName: 'BuildAction',
      project: buildProject,
      input: sourceOutput,
      outputs: [buildOutput],
    });

    buildStage.addAction(buildAction);

    // Deploy Stage
    const deployStage = pipeline.addStage({
      stageName: 'Deploy',
    });

    // CodeBuild Deploy Project
    const deployProject = new PipelineProject(this, 'DeployStageProject', {
      buildSpec: BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            'runtime-versions': {
              nodejs: 16,
            },
            // eslint-disable-next-line quote-props
            commands: ['npm install -g aws-cdk'],
          },
          build: {
            commands: ['echo Deploy started on `date`', 'cdk deploy'],
          },
          post_build: {
            commands: ['echo Deploy completed on `date`'],
          },
        },
      }),
      environment: {
        buildImage: LinuxBuildImage.AMAZON_LINUX_2_4,
        privileged: true,
        computeType: ComputeType.SMALL,
      },
    });

    // CodeBuild Deploy Action
    const deployAction = new CodeBuildAction({
      actionName: 'DeployAction',
      project: deployProject,
      input: buildOutput,
    });

    // Add Deploy Action to Stage
    deployStage.addAction(deployAction);

    // Add Change Controller
    props.changeControlCalendar._bind(this);

    pipeline.stages.forEach((stage) => {
      new ChangeController(this, `change-controller-${stage.stageName}`, {
        calendar: props.changeControlCalendar,
        stage,
        schedule: props.changeControlCheckSchedule,
        searchTerms: props.searchTerms,
      });
    });
  }
}
