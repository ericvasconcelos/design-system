import React from 'react'

import { styledRender } from 'utils/styledRender'

import { Button } from '../index.js'

describe('should render the component correctly when', () => {
  it('has basic props', () => {
    const { getByTestId } = styledRender(<Button onClick={() => {}}>Test</Button>)
    const component = getByTestId('Button')
    expect(component).toMatchSnapshot()
  })
})
