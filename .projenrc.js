const { awscdk } = require('projen');
const { Stability } = require('projen/lib/cdk');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kendra Neil',
  authorAddress: 'kneil@amazon.com',
  cdkVersion: '2.50.0',
  constructsVersion: '10.1.160',
  defaultReleaseBranch: 'main',
  name: '@cdklabs/cdk-codepipeline-extensions',
  repositoryUrl: 'https://github.com/cdklabs/cdk-codepipeline-extensions.git',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  stability: Stability.EXPERIMENTAL,
  npmAccess: 'public',
  publishToGo: {
    moduleName: 'github.com/cdklabs/cdk-codepipeline-extensions',
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
  docgen: true,
  deps: [],
  description:
    'This project is for use in the workshop DOP 401: Get better at building AWS CDK constructs.',
  devDeps: [],
  bundledDeps: ['@types/aws-lambda', 'aws-sdk'],
  eslintOptions: {
    prettier: true,
  },
});

project.package.addField('prettier', {
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
});

project.eslint.addRules({
  'prettier/prettier': [
    'error',
    { singleQuote: true, semi: true, trailingComma: 'es5' },
  ],
});

project.eslint.addOverride({
  files: ['*-function.ts'],
  rules: { 'prettier/prettier': 'off' },
});

project.synth();
