import { theme } from 'styles/theme'
import { arrayCombinations } from 'utils/arrayCombinations'
import { getColorFromName } from 'utils/getColorFromName/index.js'

import { getBorder } from '../index.js'

describe('getBorderTest when', () => {
  const bordersStyles = arrayCombinations(
    Object.keys(theme.border.width),
    Object.keys(theme.border.style),
    Object.keys(theme.pallete).map(color => `${color}400`)
  )

  it.each(bordersStyles)(
    'width: %s, style: %s, color: %s',
    (borderWidth, borderStyle, borderColor) => {
      const border = `border: ${theme.border.width[borderWidth]} ${
        theme.border.style[borderStyle]
      } ${getColorFromName({ theme, styleColor: borderColor })};`
      expect(getBorder({ theme, borderWidth, borderStyle, borderColor })).toBe(border)
    }
  )
})
