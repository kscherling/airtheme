import base from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `base`', () => {
  const result = base.base()

  expect(result).toEqual({
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
  })
})

it('can initialize with custom `attribute`', () => {
  const result = base.base({
    baseFontSize: {},
    baseLineHeight: {},
    baseSpacing: {}
  })

  expect(result).toEqual({
    __schemaname: 'Base',
    __typename: 'Base',
    baseFontSize: {},
    baseLineHeight: {},
    baseSpacing: {}
  })
})
