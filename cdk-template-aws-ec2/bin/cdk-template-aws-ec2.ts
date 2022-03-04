#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkTemplateAwsEc2Stack } from '../lib/cdk-template-aws-ec2-stack';

const app = new cdk.App();
new CdkTemplateAwsEc2Stack(app, 'CdkTemplateAwsEc2Stack');
