import type { Options } from './types'
import { genRootFontSize } from './core'
import { debounce } from './utils'

function pxtorem(options: Options = {}) {
  const docEl = document.documentElement
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
