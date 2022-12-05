export class DateUtils {
  static toDate(string, format = 'pt-br') {
    let day = ''
    let month = ''
    let year = ''

    switch (format) {
      case 'pt-br':
        [day, month, year] = string?.split('/')
        break
      case 'iso':
        [year, month, day] = string?.split('-')
        break
      default:
        throw new Error('Format invalid')
    }

    return new Date(year, parseInt(month, 10) - 1, day)
  }

  static getAge(date) {
    if (!(date instanceof Date)) {
      throw new TypeError('Date invalid')
    }

    const difference = Date.now() - date.getTime()

    return Math.abs(new Date(difference).getUTCFullYear() - 1970)
  }

  static toString(date, format = 'pt-br') {
    if (!(date instanceof Date)) {
      throw new TypeError('Date invalid')
    }

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const year = date.getFullYear()

    switch (format) {
      case 'pt-br':
        return `${day}/${month}/${year}`
      case 'iso':
        return `${year}-${month}-${day}`
      default:
        throw new Error('Format invalid')
    }
  }

  static validate(date, format = 'pt-br') {
    const monthDaysMap = {
      '01': 31,
      '02': 29,
      '03': 31,
      '04': 30,
      '05': 31,
      '06': 30,
      '07': 31,
      '08': 31,
      '09': 30,
      10: 31,
      11: 30,
      12: 31
    }
    let isValid = false

    let day = ''
    let month = ''
    let year = ''

    switch (format) {
      case 'pt-br':
        [day, month, year] = date?.split('/')
        break
      case 'iso':
        [year, month, day] = date?.split('-')
        break
      default:
        throw new Error('Format invalid')
    }

    isValid = isValid || parseInt(day, 10) <= monthDaysMap[month]
    isValid = isValid && parseInt(year, 10) > 1900

    return isValid
  }

  static convertMonthToYear(month) {
    return parseInt(month, 10) / 12
  }

  static formatPeriod(period, periodType) {
    const periodTypeMap = {
      monthly: { singular: 'mês', plural: 'meses' },
      yearly: { singular: 'ano', plural: 'anos' },
      daily: { singular: 'dia', plural: 'dias' }
    }
    return `${period} ${periodTypeMap[periodType][period < 2 ? 'singular' : 'plural']}`
  }
}
