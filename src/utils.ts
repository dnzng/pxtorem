export const extend = Object.assign

interface DebounceOptions {
  timeout?: number
  immediate?: boolean // whether to excute immediately
}
const DEFAULT_OPTIONS: DebounceOptions = {
  timeout: 100,
  immediate: true
}
export function debounce(
  fn: (...args: any[]) => void,
  options: DebounceOptions = {}
) {
  const opts = extend({}, DEFAULT_OPTIONS, options)
  let timer: ReturnType<typeof setTimeout> | null
  if (opts.immediate) {
    fn.apply(null)
  }
  return function(this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, opts.timeout)
  }
}
