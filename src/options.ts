import type { Options, ResolvedOptions, DebounceOptions, ResolvedDebounceOptions } from './types'
import { extend } from './utils'

export const defaultOptions = {
  designWidth: 750,
  base: 100
}
export const defaltDebounceOptions = {
  timeout: 100,
  immediate: true
}

export function resolveOptions(options: Options = {}) {
  options = extend({}, defaultOptions, options)
  return options as ResolvedOptions
}

export function resolveDebounceOptions(options: DebounceOptions = {}) {
  options = extend({}, defaltDebounceOptions, options)
  return options as ResolvedDebounceOptions
}
