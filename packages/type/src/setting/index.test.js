import setting from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `setting`', () => {
  const result = setting.base()

  expect(result).toEqual({
    object: 'setting',
    color: {
      content: [],
      view: 'reference',
      viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
      reference: 'swatch',
      object: 'color',
      unit: 'reference'
    },
    fontFamily: {
      content: [],
      view: 'reference',
      viewable: ['reference', 'string'],
      reference: 'fontFace',
      object: 'fontFamily',
      unit: 'reference'
    },
    fontSize: {
      content: [],
      view: 'factor',
      viewable: ['factor', 'px', 'rem'],
      reference: 'baseFontSize',
      object: 'fontSize',
      unit: 'factor'
    },
    fontWeight: {
      content: [],
      view: 'string',
      viewable: ['string'],
      reference: null,
      object: 'fontWeight',
      unit: 'string'
    },
    spacing: {
      content: [],
      view: 'factor',
      viewable: ['factor', 'px'],
      reference: 'baseSpacing',
      object: 'spacing',
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
    content: [{ name: null, ordinal: null, object: 'hexa', value: '#000000, 1' }],
    view: 'reference',
    viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
    reference: 'swatch',
    object: 'color',
    unit: 'reference'
  })
})
