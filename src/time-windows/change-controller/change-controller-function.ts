// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for ChangeControllerFunction
 */
export interface ChangeControllerFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/time-windows/change-controller/change-controller.
 */
export class ChangeControllerFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: ChangeControllerFunctionProps) {
    super(scope, id, {
      description: 'src/time-windows/change-controller/change-controller.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs20.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../assets/time-windows/change-controller/change-controller.lambda')),
    });
  }
}