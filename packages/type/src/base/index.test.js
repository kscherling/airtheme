import base from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `base`', () => {
  const result = base.base()

  expect(result).toEqual({
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
  })
})

it('can initialize with custom `attribute`', () => {
  const result = base.base({
    baseFontSize: attribute.baseFontSize({
      content: { some: 'data' }
    })
  })

  expect(result).toEqual({
    __schemaname: 'Base',
    __typename: '',
    baseFontSize: {
      __schemaname: 'Attribute',
      __typename: 'BaseFontSize',
      content: { some: 'data' },
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
