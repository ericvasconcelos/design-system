#!/bin/bash
basedir="$(pwd)/src/utils/$1"
if [ -d $basedir ]; then
    echo "Util $1 alredy exists"
    return
fi

testdir="$basedir/__tests__"

mkdir -p $testdir


cat > $basedir/index.js << EOF
export const $1 = (params) => {
  /* write your request call here */
}
EOF

cat > $testdir/index.test.js << EOF
import { $1 } from '../index.js'

describe('Should to something when', () => {
  it('a cenario occurs', () => {
    /* write your tests here :) */
  })
})
EOF
echo "Util $1 was created at $basedir"
