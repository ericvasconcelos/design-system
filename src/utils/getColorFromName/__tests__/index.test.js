import { theme } from 'styles/theme'

import { getColorFromName } from '../index.js'

describe('getColorFromName test when', () => {
  let styleColor
  let color
  it('styleColor is greyCash400', () => {
    styleColor = 'greyCash400'
    color = getColorFromName({ theme, styleColor })
    expect(color).toBe(theme.pallete.greyCash[400])
  })
  it('styleColor is greyCash400-80', () => {
    styleColor = 'greyCash400-80'
    color = getColorFromName({ theme, styleColor })
    expect(color).toBe(`${theme.pallete.greyCash[400]}CC`)
  })
  it('styleColor is lightBlueCash200-50', () => {
    styleColor = 'lightBlueCash200-50'
    color = getColorFromName({ theme, styleColor })
    expect(color).toBe(`${theme.pallete.lightBlueCash[200]}80`)
  })
})
