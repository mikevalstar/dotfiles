#!/bin/bash

## Replaced the BULLETs in the daily note with the new bullets from bjourn

## Check VAULT_PATH EXISTS or exit
if [ -z "$VAULT_PATH" ]; then
    echo "VAULT_PATH not set"
    exit 1
fi

# Get today's date
YEAR=$(date +%Y)
MONTH=$(date +%m)
DATE=$(date +%Y-%m-%d)

# Construct the file path
FILE_PATH="${VAULT_PATH}/Daily Notes/${YEAR}/${MONTH}/${DATE}.md"

# Check if the file exists
if [ ! -f "$FILE_PATH" ]; then
    echo "File does not exist: $FILE_PATH"
    exit 1
fi

# replace the bullets with the new bullets
bjourn list | sed -i '' -e '/## Bullets/,/## Accomplishments/{/## Bullets/!{/## Accomplishments/!d;};}' -e '/## Bullets/r /dev/stdin' "$FILE_PATH"
