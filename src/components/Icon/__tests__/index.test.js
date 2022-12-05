import React from 'react'

import { theme } from 'styles/theme.js'
import { arrayCombinations } from 'utils/arrayCombinations'
import { getColorFromName } from 'utils/getColorFromName'
import { getIconNames } from 'utils/getIconNames'
import { styledRender } from 'utils/styledRender'

import { Icon } from '../index.js'

const iconPossibilities = [
  'error',
  'success',
  'warning',
  'whiteError',
  'whiteSuccess',
  'whiteWarning'
]

describe('testing Icon component when', () => {
  const propsCombinations = arrayCombinations(
    getIconNames(),
    Object.keys(theme.pallete).map(color => `${color}400`)
  )

  it.each(propsCombinations)('should render the component correctly %p', (icon, styleColor) => {
    const { getByTestId } = styledRender(<Icon icon={icon} styleColor={styleColor} />)
    const component = getByTestId('Icon')

    if (iconPossibilities.includes(icon)) {
      expect(component).toHaveStyleRule('-webkit-mask-image', 'none')
      expect(component).toHaveStyleRule('background-image', `url("${theme.icons[icon]}")`)
      expect(component).toHaveStyleRule('background-color', 'transparent')
    } else {
      expect(component).toHaveStyleRule('-webkit-mask-image', `url(${theme.icons[icon]})`)
      expect(component).toHaveStyleRule('mask-image', `url(${theme.icons[icon]})`)
      expect(component).toHaveStyleRule('background-color', getColorFromName({ theme, styleColor }))
    }

    expect(component).toMatchSnapshot()
  })
})
