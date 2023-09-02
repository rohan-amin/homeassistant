#!/bin/bash

display_usage() {
  echo "This script must be run with at least two arguments."
  echo -e "\nUsage: $0 [arguments] \n"
}

# Argument 1: Denon IP Address
# Argument 2: Command to Send
# Argument 3: Optional Extra Parameter for Command

# If less than two arguments, display usage
if [ $# -le 1 ]
  then
    display_usage
    exit 1
fi

# busy-box nc in the docker container uses -w instead of -q
echo -n "$2$3" | nc -w 1 $1 23
