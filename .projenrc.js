const { awscdk } = require('projen');
const { Stability } = require('projen/lib/cdk');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kendra Neil',
  authorAddress: 'kneil@amazon.com',
  cdkVersion: '2.49.0',
  defaultReleaseBranch: 'main',
  name: '@cdklabs/cdk-codepipeline-extensions',
  repositoryUrl: 'https://github.com/cdklabs/cdk-codepipeline-extensions.git',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  stability: Stability.EXPERIMENTAL,
  // publishToGo: {
  //   moduleName: 'github.com/cdklabs/cdk-codepipeline-extensions',
  // },
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
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [],
  bundledDeps: [
    '@types/aws-lambda',
    'aws-sdk',
  ],
  constructsVersion: '10.1.149',
});
const addFiles = project.addTask('add-files-to-lib', {
  exec: 'mv cdk-codepipeline-extensions/cdk-codepipeline-extensions/src/time-windows/calendar/calendar.ics cdk-codepipeline-extensions/cdk-codepipeline-extensions/lib/time-windows/calendar/calendar.ics',
});
project.tasks.tryFind('post-compile').spawn(addFiles);

project.synth();
