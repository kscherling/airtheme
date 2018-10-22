import theme from './index'
import { VERSION } from '@airtheme/core'

const withId = (mock, base) => ({ ...base, id: mock.id })

const baseTheme = {
  __schemaname: 'Theme',
  __typename: 'Base',
  base: {
    __schemaname: 'Base',
    __typename: 'Base',
    baseFontSize: {
      __schemaname: 'Attribute',
      __typename: 'BaseFontSize',
      content: {
        __schemaname: 'Unit',
        __typename: 'Px',
        name: '',
        ordinal: 0,
        value: ''
      },
      reference: null,
      unit: 'Px',
      view: 'Px',
      viewable: ['Px']
    },
    baseLineHeight: {
      __schemaname: 'Attribute',
      __typename: 'BaseLineHeight',
      content: {
        __schemaname: 'Unit',
        __typename: 'Factor',
        name: '',
        ordinal: 0,
        value: ''
      },
      reference: 'base.baseFontSize',
      unit: 'Factor',
      view: 'Factor',
      viewable: ['Factor', 'Px']
    },
    baseSpacing: {
      __schemaname: 'Attribute',
      __typename: 'BaseSpacing',
      content: {
        __schemaname: 'Unit',
        __typename: 'Px',
        name: '',
        ordinal: 0,
        value: ''
      },
      reference: null,
      unit: 'Px',
      view: 'Px',
      viewable: ['Px']
    }
  },
  fontFace: {
    __schemaname: 'Attribute',
    __typename: 'FontFace',
    content: [],
    reference: null,
    unit: 'String',
    view: 'String',
    viewable: ['String']
  },
  id: '12345',
  name: 'My Awesome Theme',
  setting: {
    __schemaname: 'Setting',
    __typename: '',
    color: {
      __schemaname: 'Attribute',
      __typename: 'Color',
      content: [],
      reference: 'swatch',
      unit: 'Reference',
      view: 'Reference',
      viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba']
    },
    fontFamily: {
      __schemaname: 'Attribute',
      __typename: 'FontFamily',
      content: [],
      reference: 'fontFace',
      unit: 'Reference',
      view: 'Reference',
      viewable: ['Reference']
    },
    fontSize: {
      __schemaname: 'Attribute',
      __typename: 'FontSize',
      content: [],
      reference: 'base.baseFontSize',
      unit: 'Factor',
      view: 'Factor',
      viewable: ['Factor', 'Px', 'Rem']
    },
    fontWeight: {
      __schemaname: 'Attribute',
      __typename: 'FontWeight',
      content: [],
      reference: null,
      unit: 'String',
      view: 'String',
      viewable: ['String']
    },
    spacing: {
      __schemaname: 'Attribute',
      __typename: 'Spacing',
      content: [],
      reference: 'base.baseSpacing',
      unit: 'Factor',
      view: 'Factor',
      viewable: ['Factor', 'Px']
    }
  },
  swatch: {
    __schemaname: 'Attribute',
    __typename: 'Swatch',
    content: [],
    reference: null,
    unit: 'Hexa',
    view: 'Hexa',
    viewable: ['Hex', 'Hexa', 'Rgb', 'Rgba']
  },
  version: '0.1.0'
}

it('creates a `theme`', () => {
  const result = theme.base()

  expect(result).toEqual(baseTheme)
})

it('initializes with prop overrides', () => {
  const result = theme.base({
    base: {},
    fontFace: {},
    id: 1,
    name: 'My Awesome Theme',
    ordinal: 1,
    setting: {},
    swatch: {},
    version: '0.1.0'
  })

  expect(result).toEqual({
    __schemaname: 'Theme',
    __typename: 'Base',
    base: {},
    fontFace: {},
    id: 1,
    name: 'My Awesome Theme',
    ordinal: 1,
    setting: {},
    swatch: {},
    version: '0.1.0'
  })
})
