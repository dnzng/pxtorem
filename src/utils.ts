import type { DebounceOptions } from './types'
import { defaltDebounceOptions } from './options'

export const extend = Object.assign

export function debounce(
  fn: (...args: any[]) => void,
  options: DebounceOptions = {}
) {
  const opts = extend({}, defaltDebounceOptions, options)
  let timer: ReturnType<typeof setTimeout> | null = null

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
