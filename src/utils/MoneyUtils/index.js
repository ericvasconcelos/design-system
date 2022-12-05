import { toMoney, toNumber } from 'vanilla-masker'

export class MoneyUtils {
  static format(entry) {
    const moneyFormatter = {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$'
    }

    return toMoney(toNumber(entry), moneyFormatter)
  }
}
