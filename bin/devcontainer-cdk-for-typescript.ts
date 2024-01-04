#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DevcontainerCdkForTypescriptStack } from '../lib/devcontainer-cdk-for-typescript-stack';

const app = new cdk.App();
new DevcontainerCdkForTypescriptStack(app, 'DevcontainerCdkForTypescriptStack');
