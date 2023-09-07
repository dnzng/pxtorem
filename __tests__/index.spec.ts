import { test, expect, vi } from 'vitest'
import { genRootFontSize } from '../src/core'
import { debounce } from '../src/utils'

const delay = async (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

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

test('debounce', async () => {
  const fn = vi.fn(() => {})
  const interval = 50

  let handler = debounce(fn, { immediate: true, interval })
  expect(fn).toHaveBeenCalled()
  handler()
  handler()
  handler()
  expect(fn).toBeCalledTimes(1)
  await delay(interval)
  expect(fn).toBeCalledTimes(2)

  handler = debounce(fn, { immediate: false, interval })
  expect(fn).toBeCalledTimes(2)
  handler()
  handler()
  handler()
  await delay(interval)
  expect(fn).toBeCalledTimes(3)
})
