#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Database Variable Definitions
DATABASE="sdcreviews"
TABLE1="ratings"
TABLE2="reviews"
USER="postgres"

# Output Filename for Faker File
OUTPUT1="ratings.csv"
OUTPUT2="reviews.csv"
FILEPATH1="$DIR/$OUTPUT1"
FILEPATH2="$DIR/$OUTPUT2"

RECORDS=${1:-10}

SCHEMA="$DIR/database_schema.sql"
SCRIPT="$DIR/generateRecords.js"

node $SCRIPT --records=$RECORDS &&
sudo -u $USER psql < $SCHEMA &&
sudo -u $USER psql -d $DATABASE -c "COPY $TABLE1 FROM '$FILEPATH1' delimiter '|'" &&
sudo -u $USER psql -d $DATABASE -c "COPY $TABLE2 FROM '$FILEPATH2' delimiter '|'";
