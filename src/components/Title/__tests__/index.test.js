import React from 'react'

import { styledRender } from 'utils/styledRender'

import { Title } from '../index.js'
import { fixtures } from './fixtures'

describe('should render the component correctly when', () => {
  it.each(fixtures)('props are %p', ({ children, level, styleType, styleColor, expectedCss }) => {
    const { getByTestId } = styledRender(
      <Title id="test" level={level} styleType={styleType} styleColor={styleColor}>
        {children}
      </Title>
    )
    const component = getByTestId('Title')

    expect(component).toHaveStyle(expectedCss)
    expect(component).toBeHtmlElementType(level || 'h1')
    expect(component).toMatchSnapshot()
  })
})
