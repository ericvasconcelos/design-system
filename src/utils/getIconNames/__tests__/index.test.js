import { theme } from 'styles/theme.js'

import { getIconNames } from '../index.js'

describe('getIconNames test', () => {
  it('unic test', () => {
    expect(getIconNames()).toEqual(Object.keys(theme.icons))
  })
})
