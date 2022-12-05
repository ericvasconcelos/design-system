import { theme } from 'styles/theme.js'

import { getGuttersNames } from '../index.js'

describe('testing getGuttersNames', () => {
  it('unic test', () => {
    expect(getGuttersNames()).toEqual(Object.keys(theme.gutters))
  })
})
