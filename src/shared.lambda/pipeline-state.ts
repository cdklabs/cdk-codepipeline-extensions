import { CodePipeline } from '@aws-sdk/client-codepipeline';
import type {
  DisableStageTransitionInput,
  EnableStageTransitionInput,
  StageState,
} from '@aws-sdk/client-codepipeline';

const codepipeline = new CodePipeline();

export const getStageState = async (
  pipelineName: string,
  stageName: string
): Promise<StageState | undefined> => {
  const pipelineState = await codepipeline.getPipelineState({
    name: pipelineName,
  });
  return pipelineState.stageStates?.find(
    (stage) => stage.stageName === stageName
  );
};

/**
 * Disables stage transitions. Will only disable if stageState.inboundTransitionState.enabled is false.
 * Strips invalid characters from the reason and truncates to 300 characters.
 */
export const disableStageTransition = async (
  params: DisableStageTransitionInput,
  lastChangedByMustInclude: string,
  stageState?: StageState
) => {
  if (
    stageState?.inboundTransitionState?.enabled === true ||
    (stageState?.inboundTransitionState?.enabled === false &&
      stageState.inboundTransitionState?.lastChangedBy?.includes(
        lastChangedByMustInclude
      ))
  ) {
    // See documentation https://docs.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html
    params.reason = params.reason
      ?.replace(/[^a-zA-Z0-9!@ \(\)\.\*\?\-]/g, '-')
      .slice(0, 300);
    await codepipeline.disableStageTransition(params);
  }
};

/**
 * Enables stage transitions. Will only enable if stageState.inboundTransitionState.enabled is true
 * and if lastChangedBy includes the lastChangedByMustInclude string.
 */
export const enableStageTransition = async (
  params: EnableStageTransitionInput,
  lastChangedByMustInclude: string,
  stageState?: StageState
) => {
  if (
    stageState?.inboundTransitionState?.enabled === false &&
    stageState.inboundTransitionState?.lastChangedBy?.includes(
      lastChangedByMustInclude
    )
  ) {
    await codepipeline.enableStageTransition(params);
  }
};
