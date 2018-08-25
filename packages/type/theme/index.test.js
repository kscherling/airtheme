import theme from './index'
import { VERSION } from '@airtheme/core'

const baseTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.15,
  baseSpacing: 16,
  fontFace: {
    content: [],
    display: 'string',
    displays: ['string'],
    reference: null,
    type: 'fontFace',
    unit: 'string'
  },
  id: null,
  name: 'Basic Airtheme',
  setting: {
    color: {
      content: [],
      display: 'reference',
      displays: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
      reference: 'swatch',
      type: 'color',
      unit: 'reference'
    },
    fontFamily: {
      content: [],
      display: 'reference',
      displays: ['reference'],
      reference: null,
      type: 'fontFamily',
      unit: 'reference'
    },
    fontSize: {
      content: [],
      display: 'factor',
      displays: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    },
    fontWeight: {
      content: [],
      display: 'string',
      displays: ['string'],
      reference: null,
      type: 'fontWeight',
      unit: 'string'
    },
    spacing: {
      content: [],
      display: 'factor',
      displays: ['factor', 'px'],
      reference: 'baseSpacing',
      type: 'spacing',
      unit: 'factor'
    }
  },
  swatch: {
    content: [],
    display: 'hexa',
    displays: ['hex', 'hexa', 'rgb', 'rgba'],
    reference: null,
    type: 'swatch',
    unit: 'hexa'
  },
  type: 'airtheme',
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
    setting: { a: 'a' },
    swatch: { a: 'a' },
    fontFace: { a: 'a' }
  })

  expect(result).toEqual({
    baseFontSize: 14,
    baseLineHeight: 1,
    baseSpacing: 14,
    id: 123,
    name: 'My Theme',
    setting: { a: 'a' },
    swatch: { a: 'a' },
    fontFace: { a: 'a' },
    type: 'airtheme',
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
