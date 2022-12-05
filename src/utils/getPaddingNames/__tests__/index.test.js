import { theme } from 'styles/theme.js'

import { getPaddingNames } from '../index.js'

describe('getPaddingName test', () => {
  it('unic test', () => {
    expect(getPaddingNames()).toEqual(Object.keys(theme.padding))
  })
})
