import type { Options, ResolvedOptions } from './types'
import { extend } from './utils'

const DEFAULT_OPTIONS: Options = {
  designWidth: 750,
  base: 100
}

function resolveOptions(options: Options) {
  options = extend({}, DEFAULT_OPTIONS, options)
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
