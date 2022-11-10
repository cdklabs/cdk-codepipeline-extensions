import { CodePipeline } from 'aws-sdk';

const codepipeline = new CodePipeline();

export const getStageState = async (pipelineName: string, stageName: string): Promise<CodePipeline.StageState | undefined> => {
  const pipelineState = await codepipeline.getPipelineState({ name: pipelineName }).promise();
  return pipelineState.stageStates?.find(stage => stage.stageName === stageName);
};

/**
 * Disables stage transitions. Will only disable if stageState.inboundTransitionState.enabled is false.
 * Strips invalid characters from the reason and truncates to 300 characters.
 */
export const disableStageTransition = async (
  params: CodePipeline.Types.DisableStageTransitionInput,
  lastChangedByMustInclude: string,
  stageState?: CodePipeline.StageState,
) => {
  if (
    stageState?.inboundTransitionState?.enabled === true ||
    (stageState?.inboundTransitionState?.enabled === false &&
      stageState.inboundTransitionState?.lastChangedBy?.includes(lastChangedByMustInclude))
  ) {
    // See documentation https://docs.amazon.com/codepipeline/latest/APIReference/API_DisableStageTransition.html
    params.reason = params.reason.replace(/[^a-zA-Z0-9!@ \(\)\.\*\?\-]/g, '-').slice(0, 300);
    await codepipeline.disableStageTransition(params).promise();
  }
};

/**
 * Enables stage transitions. Will only enable if stageState.inboundTransitionState.enabled is true
 * and if lastChangedBy includes the lastChangedByMustInclude string.
 */
export const enableStageTransition = async (
  params: CodePipeline.Types.EnableStageTransitionInput,
  lastChangedByMustInclude: string,
  stageState?: CodePipeline.StageState,
) => {
  if (
    stageState?.inboundTransitionState?.enabled === false &&
    stageState.inboundTransitionState?.lastChangedBy?.includes(lastChangedByMustInclude)
  ) {
    await codepipeline.enableStageTransition(params).promise();
  }
};