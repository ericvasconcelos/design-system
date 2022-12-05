import { theme } from 'styles/theme.js'
import { arrayCombinations } from 'utils/arrayCombinations'

import { getBackgroundColor } from '../index.js'

const colors = Object.keys(theme.pallete)
const tones = [100, 200, 300, 400]
describe('get background-color when ', () => {
  it.each(arrayCombinations(colors, tones))('colorName is %s', (color, tone) => {
    const styleColor = `${color}${tone}`
    const background = `background-color: ${theme.pallete[color][tone]};`
    expect(getBackgroundColor({ theme, styleColor })).toBe(background)
  })
})
