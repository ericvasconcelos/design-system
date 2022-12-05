#!/bin/bash

basedir=$(dirname "$0")

component=${component:--component}
util=${util:--util}


while [ $# -gt 0 ]; do

   if [[ $1 == *"-"* ]]; then
        param="${1/--/}"
        declare $param="$2"
        
        # echo $1 $2 // Optional to see the parameter:value result
   fi

  shift
done

if [[ $component != *"-component"* && ! -z "$component" ]]; then
    sh "$basedir/component.sh" "$component";
    exit
fi
if [[ $util != *"-util"* && ! -z "$util" ]]; then
    sh "$basedir/util.sh" "$util";
    exit
fi

echo "Missing arguments! Check documentation on the storybook of this project to more information"