import type { Options, RemoveHandle } from './types'
import { genRootFontSize } from './core'
import { debounce } from './utils'

function pxtorem(options: Options = {}): RemoveHandle {
  const docEl = document.documentElement
  const preFontSize = docEl.style.fontSize
  const { interval, ...rootOptions } = options

  const getRootFontSize = genRootFontSize(rootOptions)
  const effect = () => { docEl.style.fontSize = `${getRootFontSize(docEl.clientWidth)}px` }
  const listener = debounce(effect, interval ? { interval } : {})

  window.addEventListener('resize', listener, { passive: true })
  return () => {
    window.removeEventListener('resize', listener)
    docEl.style.fontSize = preFontSize
  }
}

export {
  pxtorem,
  genRootFontSize
}
