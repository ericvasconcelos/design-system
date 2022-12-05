#!/bin/bash


basedir="$(pwd)/src/components/$1"
if [ -d $basedir ]; then
    echo "Component $1 alredy exists"
    return
fi

testdir="$basedir/__tests__"
storydir="$basedir/stories"

mkdir -p $testdir
mkdir -p $storydir


cat > $basedir/styles.js << EOF
import styled from 'styled-components'

export const Wrapper = styled.div\`
  // write your code here :)
\`
EOF


cat > $basedir/index.js << EOF
import {
  /*
    import the used types here:
    any, array, bool, func, number,
    object, string, symbol,
    node, element, elementType,
    instanceOf, oneOf, oneOfType,
    arrayOf, shape, exact
  */
} from 'prop-types'
import { Wrapper } from './styles'

export const $1 = () => (
  <Wrapper data-testid='$1'>
    {/* write your code here :) */}
  </Wrapper>
)

$1.propTypes = {
  /* write propTypes here */
}

$1.defaultProps = {
  /* write default props here */
}
EOF

cat > $testdir/index.test.js << EOF
import { renderWithTheme } from 'utils/renderWithTheme'

import { $1 } from '../index.js'

describe('Should to something when', () => {
  it('a cenario occurs', () => {
    const { getByTestId } = renderWithTheme(<$1 />)
    expect(getByTestId('$1')).toMatchSnapshot()

    /* write your tests here :) */
  })
})

EOF

cat > $storydir/index.stories.js << EOF
import { $1 } from '../index.js'

export default {
  title: 'components/$1',
  component: $1
}

const Template = args => <$1 {...args} />

export const Default = Template.bind({})
Default.args = {
  /* write default args here */
}
EOF

echo "component $1 was created at $basedir"
