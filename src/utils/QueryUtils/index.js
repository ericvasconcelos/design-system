export class QueryUtils {
  static toObject(string) {
    const object = {}

    if (typeof string === 'string' && string !== '') {
      const items = string.split('&')
      items.forEach(item => {
        const parts = item.split('=')
        const [key, value] = parts
        object[key] = value
      })
    }

    return object
  }

  static toString(object) {
    const list = []

    if (typeof object === 'object') {
      Object.keys(object).forEach(key => {
        list.push(`${key}=${object[key]}`)
      })
    }

    return list.join('&')
  }
}
