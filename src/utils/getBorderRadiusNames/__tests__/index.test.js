import { theme } from 'styles/theme'

import { getBorderRadiusNames } from '../index.js'

describe('util test', () => {
  it('', () => {
    expect(getBorderRadiusNames()).toEqual(Object.keys(theme.border.radius))
  })
})
