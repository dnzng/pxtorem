export interface Options {
  designWidth?: number
  base?: number
  maxClientWidth?: number
}

export type ResolvedOptions = Required<Exclude<Options, 'maxClientWidth'>>
