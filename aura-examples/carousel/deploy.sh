#!/bin/bash

sfdx force:source:deploy -w 1000 \
    --ignorewarnings \
    --manifest src/package.xml \
    --verbose \
    -u $DEFAULT_ORG
