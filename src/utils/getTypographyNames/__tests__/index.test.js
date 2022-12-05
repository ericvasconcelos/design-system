import { theme } from 'styles/theme.js'

import { getTypographyNames } from '../index.js'

describe('getTypographyNames test', () => {
  it('unic test', () => {
    expect(getTypographyNames()).toEqual(Object.keys(theme.typography))
  })
})
