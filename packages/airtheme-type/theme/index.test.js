import theme from './index'
import { VERSION } from '@airtheme/airtheme-core'

const baseTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.15,
  baseSpacing: 16,
  id: null,
  name: 'Basic Airtheme',
  setting: {},
  swatch: [],
  type: 'theme',
  version: '0.1.0'
}

it('creates a `theme`', () => {
  const result = theme.basic()

  expect(result).toEqual(baseTheme)
})

it('initializes with prop overrides', () => {
  const result = theme.basic({
    baseFontSize: 14,
    baseLineHeight: 1,
    baseSpacing: 14,
    id: 123,
    name: 'My Theme',
    ordinal: 1,
    setting: { a: 1 },
    swatch: [1, 2, 3]
  })

  expect(result).toEqual({
    baseFontSize: 14,
    baseLineHeight: 1,
    baseSpacing: 14,
    id: 123,
    name: 'My Theme',
    setting: { a: 1 },
    swatch: [1, 2, 3],
    type: 'theme',
    version: '0.1.0'
  })
})

it('sanitizes params', () => {
  const result = theme.basic({
    type: 'oops',
    version: '100.1.1',
    nope: true
  })

  expect(result).toEqual(baseTheme)
})
