import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { awscdk, cdk } from 'projen';

const project = new CdklabsConstructLibrary({
  name: '@cdklabs/cdk-codepipeline-extensions',
  description:
    'This project is for use in the workshop DOP 402: Get better at building AWS CDK constructs',
  author: 'Amazon Web Services',
  authorAddress: 'aws-cdk-dev@amazon.com',
  repositoryUrl: 'https://github.com/cdklabs/cdk-codepipeline-extensions.git',
  projenrcTs: true,
  defaultReleaseBranch: 'main',
  enablePRAutoMerge: true,

  // Deps
  cdkVersion: '2.128.0', // needed for Pipeline.pipelineType
  jsiiVersion: '5.5.x',
  typescriptVersion: '5.5.x',
  deps: [],
  devDeps: [
    '@types/aws-lambda',
    '@aws-sdk/client-codepipeline',
    '@aws-sdk/client-cloudwatch',
    '@aws-sdk/client-s3',
    '@aws-sdk/client-ssm',
    '@aws-sdk/credential-providers',
    'jsii-rosetta@5.5.x',
  ],
  prettier: true,

  // lambda settings for SDKv3
  lambdaOptions: {
    awsSdkConnectionReuse: false,
    runtime: awscdk.LambdaRuntime.NODEJS_20_X,
    bundlingOptions: {
      externals: [],
    },
  },

  // npm settings
  private: false,
  stability: cdk.Stability.EXPERIMENTAL,
  setNodeEngineVersion: false,

  // package names
  publishToGo: {
    moduleName: 'github.com/cdklabs/cdk-codepipeline-extensions-go',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdk.codepipeline.extensions',
    mavenGroupId: 'io.github.cdklabs',
    mavenArtifactId: 'cdk-codepipeline-extensions',
    mavenServerId: 'central-ossrh',
  },
  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkCodePipelineExtensions',
    packageId: 'Cdklabs.CdkCodePipelineExtensions',
  },
  publishToPypi: {
    distName: 'cdklabs.codepipeline-extensions',
    module: 'cdk.codepipeline_extensions',
  },
});

// Prettier config
project.package.addField('prettier', {
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
});
project.eslint?.addRules({
  'prettier/prettier': [
    'error',
    { singleQuote: true, semi: true, trailingComma: 'es5' },
  ],
});
project.eslint?.allowDevDeps('src/**/shared.lambda/**/*.ts');
project.eslint?.addOverride({
  files: ['*-function.ts'],
  rules: { 'prettier/prettier': 'off' },
});

project.synth();
