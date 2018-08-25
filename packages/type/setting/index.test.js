import setting from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `setting`', () => {
  const result = setting.base()

  expect(result).toEqual({
    color: {
      content: [],
      view: 'reference',
      viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
      reference: 'swatch',
      type: 'color',
      unit: 'reference'
    },
    fontFamily: {
      content: [],
      view: 'reference',
      viewable: ['reference'],
      reference: null,
      type: 'fontFamily',
      unit: 'reference'
    },
    fontSize: {
      content: [],
      view: 'factor',
      viewable: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      type: 'fontSize',
      unit: 'factor'
    },
    fontWeight: {
      content: [],
      view: 'string',
      viewable: ['string'],
      reference: null,
      type: 'fontWeight',
      unit: 'string'
    },
    spacing: {
      content: [],
      view: 'factor',
      viewable: ['factor', 'px'],
      reference: 'baseSpacing',
      type: 'spacing',
      unit: 'factor'
    }
  })
})

it('can initialize with custom `attribute`', () => {
  const result = setting.base({
    color: attribute.color({
      content: [unit.hexa({ value: '#000000, 1' })]
    })
  })

  expect(result.color).toEqual({
    content: [{ key: null, ordinal: null, type: 'hexa', value: '#000000, 1' }],
    view: 'reference',
    viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
    reference: 'swatch',
    type: 'color',
    unit: 'reference'
  })
})
