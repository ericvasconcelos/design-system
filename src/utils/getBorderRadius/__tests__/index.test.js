import { theme } from 'styles/theme'
import { getBorderRadiusNames } from 'utils/getBorderRadiusNames'

import { getBorderRadius } from '../index.js'

describe('getBorderRadius when', () => {
  const borderRadiusNames = getBorderRadiusNames()
  it.each(borderRadiusNames)('radius is %s', borderRadius => {
    const borderRadiusString = `border-radius: ${theme.border.radius[borderRadius]};`
    expect(getBorderRadius({ theme, borderRadius })).toBe(borderRadiusString)
  })
})
