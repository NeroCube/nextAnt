#!/bin/bash

wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh

heroku container:login

if [ "$TRAVIS_BRANCH" = "master" ]; then
  npm run deploy
else
  exit 0
fi
