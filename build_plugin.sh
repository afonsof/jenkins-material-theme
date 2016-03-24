#!/usr/bin/env bash

set -e

cd plugin
rm -rf target
mvn package

mkdir -p ../hpi
cp target/*.hpi ../hpi