import type { ResolvedOptions } from './types'

export function genRootFontSize(options: ResolvedOptions) {
  const { designWidth, base, maxClientWidth } = options

  return (clientWidth: number) => {
    // keep clientWidth constant when reaching maxClientWidth
    if (maxClientWidth && clientWidth >= maxClientWidth) {
      clientWidth = maxClientWidth
    }
    return (base / designWidth) * clientWidth
  }
}
