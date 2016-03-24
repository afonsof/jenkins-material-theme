#!/usr/bin/env bash

set -e

grunt
mkdir -p plugin/src/main/webapp
cp dist/* plugin/src/main/webapp/

cd plugin
rm -rf target
mvn package

mkdir -p ../hpi
cp target/*.hpi ../hpi