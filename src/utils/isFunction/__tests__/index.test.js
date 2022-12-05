import { isFunction } from '../index.js'

describe('isFunction should return a false or true when', () => {
  it('is Not a function', () => {
    expect(isFunction('')).toBeFalsy()
    expect(isFunction('oi')).toBeFalsy()
    expect(isFunction(12)).toBeFalsy()
    expect(isFunction(String(2))).toBeFalsy()
    expect(isFunction({ test: 'value' })).toBeFalsy()
    expect(isFunction(['array'])).toBeFalsy()
    expect(isFunction(Object.create(null))).toBeFalsy()
  })
  it('is Not a function', () => {
    expect(isFunction(() => {})).toBeTruthy()
    // eslint-disable-next-line prefer-arrow-callback
    expect(isFunction(function NamedFunction() {})).toBeTruthy()
    expect(isFunction(Number)).toBeTruthy()
    expect(isFunction(String)).toBeTruthy()
  })
})
