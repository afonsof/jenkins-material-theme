#!/usr/bin/env bash

set -e

git checkout master
FOLDER=$TMPDIR$RANDOM
VERSION=$(cat package.json | sed -n "s/ *\"version\": *\"\(.*\)\",/\1/p")
echo Publishing version $VERSION

grunt
mv dist $FOLDER

git checkout gh-pages
rm -rf dist
mv $FOLDER ./dist

read -p "\nYou are going to publish the version $VERSION. Are you sure (y/n)? " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    exit 1
fi

git add dist/
git commit -m "version $VERSION"
git push origin gh-pages

git checkout master
