import React from 'react'

import { styledRender } from 'utils/styledRender'

import { Anchor } from '../index.js'

describe('should render the component correctly when', () => {
  it('has basic props', () => {
    const { getByTestId } = styledRender(<Anchor href="/">Test</Anchor>)
    const component = getByTestId('Link')
    expect(component).toMatchSnapshot()
  })
})
