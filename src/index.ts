import type { Options } from './types'
import { genRootFontSize } from './core'
import { debounce } from './utils'

function pxtorem(options: Options = {}) {
  const docEl = document.documentElement
  const { interval, ...rootOptions } = options
  const getRootFontSize = genRootFontSize(rootOptions)
  const effect = () => {
    docEl.style.fontSize = `${getRootFontSize(docEl.clientWidth)}px`
  }
  const handler = debounce(effect, interval ? { interval } : {})
  window.addEventListener('resize', handler, false)
}

export {
  pxtorem,
  genRootFontSize
}
