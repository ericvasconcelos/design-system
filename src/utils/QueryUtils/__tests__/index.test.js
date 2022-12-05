import { QueryUtils } from '../index.js'

describe('Should convert to object when', () => {
  it('empty string', () => {
    expect(QueryUtils.toObject('')).toEqual({})
  })

  it('full string', () => {
    expect(QueryUtils.toObject('test=1&test2=2')).toEqual({ test: '1', test2: '2' })
  })

  it('invalid params', () => {
    expect(QueryUtils.toObject({})).toEqual({})
  })
})

describe('Should convert to string when', () => {
  it('empty object', () => {
    expect(QueryUtils.toString({})).toEqual('')
  })

  it('full object', () => {
    expect(QueryUtils.toString({ test: '1', test2: '2' })).toEqual('test=1&test2=2')
  })

  it('invalid params', () => {
    expect(QueryUtils.toString('')).toEqual('')
  })
})
