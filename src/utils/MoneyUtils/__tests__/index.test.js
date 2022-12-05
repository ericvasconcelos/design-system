import { MoneyUtils } from '../index'

describe('Should format number to money string when', () => {
  it('entry is 100000', () => {
    expect(MoneyUtils.format(100000)).toBe('R$ 1.000,00')
  })
})
