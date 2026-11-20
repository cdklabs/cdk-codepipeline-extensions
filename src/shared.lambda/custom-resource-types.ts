import type { CloudFormationCustomResourceEventCommon } from 'aws-lambda';

/**
 * Mirrors `OnEventRequest` from aws-cdk-lib's custom resource provider
 * framework. That module is not exposed through the package `exports`, so it
 * cannot be imported under node16 module resolution.
 */
export interface OnEventRequest
  extends CloudFormationCustomResourceEventCommon {
  readonly RequestType: 'Create' | 'Update' | 'Delete';
  readonly PhysicalResourceId?: string;
  readonly OldResourceProperties?: { [key: string]: any };
}

/**
 * Mirrors `OnEventResponse` from aws-cdk-lib's custom resource provider
 * framework.
 */
export interface OnEventResponse {
  readonly PhysicalResourceId?: string;
  readonly Data?: { [name: string]: any };
  readonly NoEcho?: boolean;
  [key: string]: any;
}
