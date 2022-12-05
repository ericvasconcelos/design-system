import { theme } from 'styles/theme.js'
import { getPaddingNames } from 'utils/getPaddingNames'

import { getPadding } from '../index.js'

describe('getPadding test when', () => {
  const paddingNames = getPaddingNames()
  it('no padding is set', () => {
    const expected = 'padding: 0;'
    expect(getPadding({ theme })).toBe(expected)
  })

  it.each(paddingNames)('padding top is %s', padding => {
    const expected = `padding: ${theme.padding[padding]};`
    expect(getPadding({ theme, top: padding })).toBe(expected)
  })

  it.each(paddingNames)('padding top and right is %s ', padding => {
    const expected = `padding: ${theme.padding[padding]} ${theme.padding[padding]};`
    expect(getPadding({ theme, top: padding, right: padding })).toBe(expected)
  })

  it.each(paddingNames)('padding top, right and bottom is %s ', padding => {
    // eslint-disable-next-line max-len
    const expected = `padding: ${theme.padding[padding]} ${theme.padding[padding]} ${theme.padding[padding]};`
    expect(getPadding({ theme, top: padding, right: padding, bottom: padding })).toBe(expected)
  })

  it.each(paddingNames)('padding top, right, bottom and left is %s ', padding => {
    // eslint-disable-next-line max-len
    const expected = `padding: ${theme.padding[padding]} ${theme.padding[padding]} ${theme.padding[padding]} ${theme.padding[padding]};`
    expect(
      getPadding({ theme, top: padding, right: padding, bottom: padding, left: padding })
    ).toBe(expected)
  })
})
