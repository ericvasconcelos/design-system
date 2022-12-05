import React from 'react'

import { styledRender } from 'utils/styledRender'

import { Text } from '../index.js'
import { fixtures } from './fixtures'

describe('testing Text component when', () => {
  it.each(fixtures)(
    'should render the component correctly with %p',
    ({ children, tag, styleType, styleColor, expectedCss }) => {
      const { getByTestId } = styledRender(
        <Text tag={tag} styleColor={styleColor} styleType={styleType}>
          {children}
        </Text>
      )
      const component = getByTestId('Text')
      expect(component).toHaveStyle(expectedCss)
      expect(component).toBeHtmlElementType(tag || 'p')
      expect(component).toHaveTextContent(children)
      expect(component).toMatchSnapshot()
    }
  )
})
