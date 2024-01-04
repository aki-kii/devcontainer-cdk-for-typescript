#!/bin/bash
set -ex

# AWS CDKのインストール
npm install -g aws-cdk

# npmパッケージのインストール
sudo chown node:node node_modules
npm ci