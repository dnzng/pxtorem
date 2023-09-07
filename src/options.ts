import type {
  RootOptions, ResolvedRootOptions,
  DebounceOptions, ResolvedDebounceOptions
} from './types'
import { extend } from './utils'

export const defaultRootOptions: RootOptions = {
  designWidth: 750,
  base: 100
}
export const defaltDebounceOptions: DebounceOptions = {
  interval: 100,
  immediate: true
}

export function resolveRootOptions(options: RootOptions = {}) {
  options = extend({}, defaultRootOptions, options)
  return options as ResolvedRootOptions
}

export function resolveDebounceOptions(options: DebounceOptions = {}) {
  options = extend({}, defaltDebounceOptions, options)
  return options as ResolvedDebounceOptions
}
