declare type markRequired<T, RK extends keyof T> = Exclude<T, RK> & Required<Pick<T, RK>>

export interface DebounceOptions {
  timeout?: number
  immediate?: boolean // whether to excute immediately
}
export type ResolvedDebounceOptions = Required<DebounceOptions>

export interface Options {
  designWidth?: number
  base?: number
  maxClientWidth?: number
  debounce?: DebounceOptions
}
export type ResolvedOptions = markRequired<Options, 'designWidth' | 'base'>
