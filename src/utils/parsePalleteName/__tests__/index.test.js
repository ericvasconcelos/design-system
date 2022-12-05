import { parsePalleteName } from '../index.js'

describe('parsePalleteName test when', () => {
  let styleColor

  it('palletName is greyCash400', () => {
    styleColor = 'greyCash400'
    const [color, tone, opacity] = parsePalleteName(styleColor)
    expect(color).toBe('greyCash')
    expect(tone).toBe('400')
    expect(opacity).toBeFalsy()
  })
  it('palletName is greyCash400-80', () => {
    styleColor = 'greyCash400-80'
    const [color, tone, opacity] = parsePalleteName(styleColor)
    expect(color).toBe('greyCash')
    expect(tone).toBe('400')
    expect(opacity).toBe('-80')
  })
  it('palletName is lightBlueCash300-24', () => {
    styleColor = 'lightBlueCash300-24'
    const [color, tone, opacity] = parsePalleteName(styleColor)
    expect(color).toBe('lightBlueCash')
    expect(tone).toBe('300')
    expect(opacity).toBe('-24')
  })
})
