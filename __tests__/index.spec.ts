// @vitest-environment jsdom
import { test, expect } from 'vitest'
import { genRootFontSize } from '../src'

const clientWidth = 375
const designWidth = 750
const base = 100

test('default', () => {
  const getRootFontSize = genRootFontSize()
  expect(getRootFontSize(clientWidth)).toBe(base / designWidth * clientWidth)
})

test('maxClientWidth', () => {
  const getRootFontSize = genRootFontSize({ maxClientWidth: 375 })
  expect(getRootFontSize(clientWidth)).toBe(base / designWidth * clientWidth)
  expect(getRootFontSize(clientWidth + 100)).toBe(base / designWidth * clientWidth)
})
