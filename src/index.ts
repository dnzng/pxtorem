import type { Options, ResolvedOptions } from './types'
import { extend, debounce } from './utils'

const docEl = document.documentElement
const DEFAULT_OPTIONS: Options = {
  designWidth: 750,
  base: 100
}

function resolveOptions(options: Options) {
  options = extend({}, DEFAULT_OPTIONS, options)
  return options as ResolvedOptions
}

function genRootFontSize(options: Options = {}) {
  const { designWidth, base, maxClientWidth } = resolveOptions(options)
  return (clientWidth: number) => {
    // keep clientWidth constant when reaching maxClientWidth
    if (maxClientWidth && clientWidth >= maxClientWidth) {
      clientWidth = maxClientWidth
    }
    return (base / designWidth) * clientWidth
  }
}

function pxtorem(options: Options = {}) {
  const getRootFontSize = genRootFontSize(options)
  const listener = debounce(() => {
    docEl.style.fontSize = `${getRootFontSize(docEl.clientWidth)}px`
  }, { immediate: true })
  window.addEventListener('resize', listener, false)
}

export {
  pxtorem,
  genRootFontSize
}
