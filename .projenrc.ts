import { CdklabsConstructLibrary } from 'cdklabs-projen-project-types';
import { cdk, javascript } from 'projen';

const project = new CdklabsConstructLibrary({
  name: '@cdklabs/cdk-codepipeline-extensions',
  description:
    'This project is for use in the workshop DOP 402: Get better at building AWS CDK constructs',
  author: 'Amazon Web Services',
  authorAddress: 'aws-cdk-dev@amazon.com',
  repositoryUrl: 'https://github.com/cdklabs/cdk-codepipeline-extensions.git',
  private: false,

  defaultReleaseBranch: 'main',
  projenrcTs: true,
  cdkVersion: '2.128.0', // needed for Pipeline.pipelineType

  enablePRAutoMerge: true,
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },

  deps: [],
  devDeps: ['@types/aws-lambda'],
  bundledDeps: ['aws-sdk'],
  prettier: true,

  stability: cdk.Stability.EXPERIMENTAL,
  npmAccess: javascript.NpmAccess.PUBLIC,
  setNodeEngineVersion: false,

  publishToGo: {
    moduleName: 'github.com/cdklabs/cdk-codepipeline-extensions-go',
  },
  publishToMaven: {
    javaPackage: 'io.github.cdklabs.cdk.codepipeline.extensions',
    mavenGroupId: 'io.github.cdklabs',
    mavenArtifactId: 'cdk-codepipeline-extensions',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
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

project.eslint?.addOverride({
  files: ['*-function.ts'],
  rules: { 'prettier/prettier': 'off' },
});

project.synth();
