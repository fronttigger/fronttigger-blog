function throttleByrAF(handler: (...args: unknown[]) => void) {
  let isWating = false

  return function (this: unknown, ...args: unknown[]) {
    if (!isWating) {
      window.requestAnimationFrame(() => {
        handler.apply(this, args)
        isWating = false
      })

      isWating = true
    }
  }
}

export default throttleByrAF
