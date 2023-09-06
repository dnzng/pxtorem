import type { Options, ResolvedOptions } from './types'
import { defaultOptions } from './options'
import { extend } from './utils'

function resolveOptions(options: Options) {
  options = extend({}, defaultOptions, options)
  return options as ResolvedOptions
}

export function genRootFontSize(options: Options = {}) {
  const { designWidth, base, maxClientWidth } = resolveOptions(options)
  return (clientWidth: number) => {
    // keep clientWidth constant when reaching maxClientWidth
    if (maxClientWidth && clientWidth >= maxClientWidth) {
      clientWidth = maxClientWidth
    }
    return (base / designWidth) * clientWidth
  }
}
