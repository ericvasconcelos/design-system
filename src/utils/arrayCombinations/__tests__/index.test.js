import { arrayCombinations } from '../index.js'

describe('arrayCombination test when', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [6, 7, 8, 9]
  const expected = [
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [2, 6],
    [2, 7],
    [2, 8],
    [2, 9],
    [3, 6],
    [3, 7],
    [3, 8],
    [3, 9],
    [4, 6],
    [4, 7],
    [4, 8],
    [4, 9]
  ]
  it('combining 2 arrays [1, 2, 3, 4] and [6, 7, 8, 9] ', () => {
    expect(arrayCombinations(arr1, arr2)).toEqual(expected)
  })
})
