import setting from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `setting`', () => {
  const result = setting()

  expect(result).toEqual({
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
  })
})

it('can initialize with custom `attribute`', () => {
  const result = setting({
    color: attribute.color({
      content: [unit.hexa({ value: '#000000, 1' })]
    })
  })

  expect(result.color).toEqual({
    content: [{ key: null, ordinal: null, type: 'hexa', value: '#000000, 1' }],
    display: 'reference',
    displays: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
    reference: 'swatch',
    type: 'color',
    unit: 'reference'
  })
})
