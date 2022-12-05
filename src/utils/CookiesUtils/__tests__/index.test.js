import { CookiesUtils } from '../index'

describe('Should convert to object when', () => {
  it('empty when string args is empty', () => {
    const cookies = CookiesUtils.toObject()

    expect(cookies).toStrictEqual({})
  })

  it('object with each key in cookies string', () => {
    const cookies = CookiesUtils.toObject('key1=test; key2=test2')

    expect(cookies).toStrictEqual({ key1: 'test', key2: 'test2' })
  })
})
