import theme from './index'
import { VERSION } from '@airtheme/core'

const baseTheme = {
  baseFontSize: 16,
  baseLineHeight: 1.15,
  baseSpacing: 16,
  fontFace: {
    content: [],
    reference: null,
    type: 'fontFace',
    unit: 'string',
    view: 'string',
    viewable: ['string']
  },
  id: '',
  name: 'Basic Airtheme',
  setting: {
    color: {
      content: [],
      reference: 'swatch',
      type: 'color',
      unit: 'reference',
      view: 'reference',
      viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba']
    },
    fontFamily: {
      content: [],
      reference: null,
      type: 'fontFamily',
      unit: 'reference',
      view: 'reference',
      viewable: ['reference']
    },
    fontSize: {
      content: [],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px', 'rem']
    },
    fontWeight: {
      content: [],
      reference: null,
      type: 'fontWeight',
      unit: 'string',
      view: 'string',
      viewable: ['string']
    },
    spacing: {
      content: [],
      reference: 'baseSpacing',
      type: 'spacing',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px']
    }
  },
  swatch: {
    content: [],
    reference: null,
    type: 'swatch',
    unit: 'hexa',
    view: 'hexa',
    viewable: ['hex', 'hexa', 'rgb', 'rgba']
  },
  type: 'airtheme',
  version: '0.1.0'
}

it('creates a `theme`', () => {
  const result = theme.base()

  expect(result).toEqual(baseTheme)
})

it('initializes with prop overrides', () => {
  const result = theme.base({
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
  const result = theme.base({
    type: 'oops',
    version: '100.1.1',
    nope: true
  })

  expect(result).toEqual(baseTheme)
})
