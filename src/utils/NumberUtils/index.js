export class NumberUtils {
  static sanitize(number) {
    if (number === '') return null

    return number.replace(/\D/g, '')
  }
}
