export const useAriaProps = (props = {}) => {
  const ariaProps = Object.entries(props).reduce((acc, [key, value]) => {
    if (key.match(/aria/)) {
      const snakeCase = key.replace(/[A-Z]/, letter => `-${letter.toLowerCase()}`).toLowerCase()
      if (value) return { ...acc, [snakeCase]: value }
      return acc
    }
    return acc
  }, {})
  return ariaProps
}
