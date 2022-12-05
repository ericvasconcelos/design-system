import { theme } from 'styles/theme'
import { arrayCombinations } from 'utils/arrayCombinations/index.js'
import { getColorFromName } from 'utils/getColorFromName/index.js'
import { getTypographyNames } from 'utils/getTypographyNames'

import { getTypography } from '../index.js'

describe('testing getTypgraphy when', () => {
  const typoNames = getTypographyNames()
  const colorNames = Object.keys(theme.pallete).map(color => `${color}400`)
  const TypoAndColors = arrayCombinations(typoNames, colorNames)

  it.each(typoNames)('the styleType is %s and color decoration is undefined', styleType => {
    const expected = `color: none;
font-size: ${theme.typography[styleType].desktop.size};
font-weight: ${theme.typography[styleType].desktop.weight};
line-height: ${theme.typography[styleType].desktop.lineHeight};
text-decoration: none;
letter-spacing: ${theme.typography[styleType].desktop.spacing};
font-family: '${theme.typography[styleType].desktop.family}', sans-serif;
`
    expect(getTypography({ theme, styleType })).toBe(expected)
  })

  it.each(TypoAndColors)(
    'the styleType is %s, color is %s and decoration is undefined',
    (styleType, styleColor) => {
      const expected = `color: ${getColorFromName({ theme, styleColor })};
font-size: ${theme.typography[styleType].desktop.size};
font-weight: ${theme.typography[styleType].desktop.weight};
line-height: ${theme.typography[styleType].desktop.lineHeight};
text-decoration: none;
letter-spacing: ${theme.typography[styleType].desktop.spacing};
font-family: '${theme.typography[styleType].desktop.family}', sans-serif;
`
      expect(getTypography({ theme, styleType, styleColor })).toBe(expected)
    }
  )
  it.each(TypoAndColors)(
    'the styleType is %s, color is %s and decoration is underlined',
    (styleType, styleColor) => {
      const expected = `color: ${getColorFromName({ theme, styleColor })};
font-size: ${theme.typography[styleType].desktop.size};
font-weight: ${theme.typography[styleType].desktop.weight};
line-height: ${theme.typography[styleType].desktop.lineHeight};
text-decoration: underlined;
letter-spacing: ${theme.typography[styleType].desktop.spacing};
font-family: '${theme.typography[styleType].desktop.family}', sans-serif;
`

      expect(getTypography({ theme, styleType, styleColor, decoration: 'underlined' })).toBe(
        expected
      )
    }
  )
})
