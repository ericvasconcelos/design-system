export function RFAdebounce(callback) {
  let timeout
  return (...args) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }
    const context = this
    const [...argument] = args
    timeout = window.requestAnimationFrame(() => {
      callback.apply(context, argument)
    })
  }
}
