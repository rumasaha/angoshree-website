#!/bin/bash
cd "$(dirname "$0")"
node server/server.js &
sleep 2
open -a "Google Chrome" "http://localhost:3001"
