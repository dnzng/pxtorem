import type { Options } from './types'
import { genRootFontSize } from './core'
import { debounce } from './utils'
import { resolveOptions } from './options'

function pxtorem(options: Options = {}) {
  const docEl = document.documentElement
  const opts = resolveOptions(options)
  const getRootFontSize = genRootFontSize(opts)
  const listener = debounce(() => {
    docEl.style.fontSize = `${getRootFontSize(docEl.clientWidth)}px`
  }, opts.debounce)
  window.addEventListener('resize', listener, false)
}

export {
  pxtorem,
  genRootFontSize
}
