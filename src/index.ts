import type { Options } from './types'
import { genRootFontSize } from './core'
import { debounce } from './utils'

const docEl = document.documentElement

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
