import { formatPercentage } from '../index.js'

describe('Format string to percentage when', () => {
  it('entry is 9', () => {
    const formatedMoney = formatPercentage(9)

    expect(formatedMoney).toBe('0,9 %')
  })
  it('entry is 999', () => {
    const formatedMoney = formatPercentage(999)

    expect(formatedMoney).toBe('99,9 %')
  })
})
