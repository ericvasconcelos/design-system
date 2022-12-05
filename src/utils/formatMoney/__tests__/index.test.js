import { formatMoney } from '../index.js'

describe('Format string to money when', () => {
  it('entry is 100000', () => {
    const formatedMoney = formatMoney(100000)

    expect(formatedMoney).toBe('R$ 1.000,00')
  })
})
