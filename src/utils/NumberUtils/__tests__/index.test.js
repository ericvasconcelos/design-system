import { NumberUtils } from '../index.js'

describe('Should sanitize number when', () => {
  it('has a normal number', () => {
    expect(NumberUtils.sanitize('29931-231')).toEqual('29931231')
  })

  it('have not a number', () => {
    expect(NumberUtils.sanitize('')).toEqual(null)
  })
})
