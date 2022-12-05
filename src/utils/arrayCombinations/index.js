export const arrayCombinations = (...args) => {
  const returnable = []
  const max = args.length - 1
  function helper(arr, i) {
    for (let j = 0, { length } = args[i]; j < length; j++) {
      const newArray = arr.slice(0) // clone arr
      newArray.push(args[i][j])
      if (i === max) returnable.push(newArray)
      else helper(newArray, i + 1)
    }
  }
  helper([], 0)
  return returnable
}
