export class ObjectUtils {
  static clean(object) {
    return Object.keys(object).reduce((acc, key) => {
      if (object[key]) return { ...acc, [key]: object[key] }
      return acc
    }, {})
  }
}
