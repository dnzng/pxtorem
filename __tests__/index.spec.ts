import { test, expect } from 'vitest'
import { genRootFontSize } from '../src/core'

const formula = (
  clientWidth: number = 375,
  designWidth: number = 750,
  base: number = 100
) => base / designWidth * clientWidth

test('default', () => {
  const clientWidth = 300
  const actual = genRootFontSize()
  expect(actual(clientWidth)).toBe(formula(clientWidth))
})

test('maxClientWidth', () => {
  const maxClientWidth = 375
  const lessThanMax = 300
  const greaterThanMax = 750
  const actual = genRootFontSize({ maxClientWidth })
  expect(actual(lessThanMax)).toBe(formula(lessThanMax))
  expect(actual(greaterThanMax)).toBe(formula(maxClientWidth))
})
