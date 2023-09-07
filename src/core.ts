import type { RootOptions } from './types'
import { resolveRootOptions } from './options'

export function genRootFontSize(options: RootOptions = {}) {
  const { designWidth, base, maxClientWidth } = resolveRootOptions(options)
  return (clientWidth: number) => {
    // keep clientWidth constant when reaching maxClientWidth
    if (maxClientWidth && clientWidth >= maxClientWidth) {
      clientWidth = maxClientWidth
    }
    return (base / designWidth) * clientWidth
  }
}
