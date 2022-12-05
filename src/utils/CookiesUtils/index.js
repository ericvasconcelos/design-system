export class CookiesUtils {
  static toObject(string = '') {
    const cookies = {}
    if (string !== '') {
      const parts = string.split('; ')
      parts.forEach(part => {
        const [key, value] = part.split('=')
        cookies[key] = value
      })
    }
    return cookies
  }
}
