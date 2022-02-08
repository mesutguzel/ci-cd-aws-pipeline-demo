#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
// import { GithubStack } from '../lib/github-stack';
import { CiCdAwsPipelineDemoStack } from '../lib/ci-cd-aws-pipeline-demo-stack';

const app = new cdk.App();
new CiCdAwsPipelineDemoStack(app, 'CiCdAwsPipelineDemoStack', {
  env:{
      account:'576263411262',
      region: 'ca-central-1',
  }

});

app.synth();