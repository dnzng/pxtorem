declare type markRequired<T, RK extends keyof T> = Omit<T, RK> & Required<Pick<T, RK>>

export interface Options {
  designWidth?: number
  base?: number
  maxClientWidth?: number
  interval?: number
}

export type RootOptions = Omit<Options, 'interval'>
export type ResolvedRootOptions = markRequired<RootOptions, 'designWidth' | 'base'>

export interface DebounceOptions {
  interval?: number
  immediate?: boolean // whether to excute immediately
}
export type ResolvedDebounceOptions = Required<DebounceOptions>
