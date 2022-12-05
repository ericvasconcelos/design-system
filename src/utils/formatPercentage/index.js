import { toMoney, toNumber } from 'vanilla-masker'

export const formatPercentage = entry => {
  const percentageFormatter = {
    precision: 1,
    separator: ',',
    suffixUnit: '%'
  }
  return toMoney(toNumber(entry), percentageFormatter)
}
