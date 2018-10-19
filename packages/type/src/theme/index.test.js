import theme from './index'
import { VERSION } from '@airtheme/core'

const withId = (mock, base) => ({ ...base, id: mock.id })

const baseTheme = {
  base: {
    baseFontSize: {
      content: { name: 'baseFontSize', object: 'px', ordinal: null, value: 16 },
      object: 'baseFontSize',
      reference: null,
      unit: 'px',
      view: 'px',
      viewable: ['px']
    },
    baseLineHeight: {
      content: {
        name: 'baseLineHeight',
        object: 'factor',
        ordinal: null,
        value: 1.15
      },
      object: 'baseLineHeight',
      reference: 'base.baseFontSize',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px']
    },
    baseSpacing: {
      content: { name: 'baseSpacing', object: 'px', ordinal: null, value: 16 },
      object: 'baseSpacing',
      reference: null,
      unit: 'px',
      view: 'px',
      viewable: ['px']
    },
    object: 'base'
  },
  fontFace: {
    content: [],
    object: 'fontFace',
    reference: null,
    unit: 'string',
    view: 'string',
    viewable: ['string']
  },
  id: 'icGOyk4F_',
  name: 'Basic Airtheme',
  object: 'theme',
  setting: {
    color: {
      content: [],
      object: 'color',
      reference: 'swatch',
      unit: 'reference',
      view: 'reference',
      viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba']
    },
    fontFamily: {
      content: [],
      object: 'fontFamily',
      reference: 'fontFace',
      unit: 'reference',
      view: 'reference',
      viewable: ['reference', 'string']
    },
    fontSize: {
      content: [],
      object: 'fontSize',
      reference: 'base.baseFontSize',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px', 'rem']
    },
    fontWeight: {
      content: [],
      object: 'fontWeight',
      reference: null,
      unit: 'string',
      view: 'string',
      viewable: ['string']
    },
    object: 'setting',
    spacing: {
      content: [],
      object: 'spacing',
      reference: 'base.baseSpacing',
      unit: 'factor',
      view: 'factor',
      viewable: ['factor', 'px']
    }
  },
  swatch: {
    content: [],
    object: 'swatch',
    reference: null,
    unit: 'hexa',
    view: 'hexa',
    viewable: ['hex', 'hexa', 'rgb', 'rgba']
  },
  version: '0.1.0'
}

it('creates a `theme`', () => {
  const result = theme.base()

  expect(result).toEqual(withId(result, baseTheme))
})

it('initializes with prop overrides', () => {
  const result = theme.base({
    id: 123,
    name: 'My Theme',
    ordinal: 1,
    setting: { some: 'data' },
    swatch: { some: 'data' },
    fontFace: { some: 'data' },
    base: { some: 'data' }
  })

  expect(result).toEqual({
    id: 123,
    name: 'My Theme',
    setting: { some: 'data' },
    swatch: { some: 'data' },
    fontFace: { some: 'data' },
    base: { some: 'data' },
    object: 'theme',
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
