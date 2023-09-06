declare type markRequired<T, RK extends keyof T> = Exclude<T, RK> & Required<Pick<T, RK>>

export interface Options {
  designWidth?: number
  base?: number
  maxClientWidth?: number
}

export type ResolvedOptions = markRequired<Options, 'designWidth' | 'base'>

export interface DebounceOptions {
  timeout?: number
  immediate?: boolean // whether to excute immediately
}
