import { ObjectUtils } from '../index.js'

describe('Should clean object when', () => {
  it('empty entry', () => {
    expect(ObjectUtils.clean({ a: '', b: 'test', c: undefined, d: null })).toEqual({ b: 'test' })
  })
})
