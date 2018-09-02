import theme from './index'
import { VERSION } from '@airtheme/core'

const withId = (mock, base) => ({ ...base, id: mock.id })

const baseTheme = {
  baseFontSize: 16,
  baseLineHeight: 16,
  baseSpacing: 16,
  fontFace: {
    content: [],
    reference: null,
    object: 'fontFace',
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
      object: 'color',
      unit: 'reference',
      view: 'reference',
      viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba']
    },
    fontFamily: {
      content: [],
      reference: 'fontFace',
      object: 'fontFamily',
      unit: 'reference',
      view: 'reference',
      viewable: ['reference', 'string']
    },
    fontSize: {
      content: [],
      reference: 'baseFontSize',
      object: 'fontSize',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px', 'rem']
    },
    fontWeight: {
      content: [],
      reference: null,
      object: 'fontWeight',
      unit: 'string',
      view: 'string',
      viewable: ['string']
    },
    spacing: {
      content: [],
      reference: 'baseSpacing',
      object: 'spacing',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px']
    }
  },
  swatch: {
    content: [],
    reference: null,
    object: 'swatch',
    unit: 'hexa',
    view: 'hexa',
    viewable: ['hex', 'hexa', 'rgb', 'rgba']
  },
  object: 'airtheme',
  version: '0.1.0'
}

it('creates a `theme`', () => {
  const result = theme.base()

  expect(result).toEqual(withId(result, baseTheme))
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
    object: 'airtheme',
    version: '0.1.0'
  })
})

it('sanitizes params', () => {
  const result = theme.base({
    object: 'oops',
    version: '100.1.1',
    nope: true
  })

  expect(result).toEqual(withId(result, baseTheme))
})
