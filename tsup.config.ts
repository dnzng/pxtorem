import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    clean: true,
    dts: true
  },
  {
    entry: ['src/index.ts'],
    format: 'iife',
    clean: true,
    globalName: 'PxToRem',
    minify: true
  }
])
