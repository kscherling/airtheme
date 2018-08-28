import attributes from './index'

it('creates `color`', () => {
  const result = attributes.color()

  expect(result).toEqual({
    content: [],
    view: 'reference',
    viewable: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
    reference: 'swatch',
    type: 'color',
    unit: 'reference'
  })
})

it('creates `fontFamily`', () => {
  const result = attributes.fontFamily()

  expect(result).toEqual({
    content: [],
    view: 'reference',
    viewable: ['reference'],
    reference: null,
    type: 'fontFamily',
    unit: 'reference'
  })
})

it('creates `fontSize`', () => {
  const result = attributes.fontSize()

  expect(result).toEqual({
    content: [],
    view: 'factor',
    viewable: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})

it('creates `fontWeight`', () => {
  const result = attributes.fontWeight()

  expect(result).toEqual({
    content: [],
    view: 'string',
    viewable: ['string'],
    reference: null,
    type: 'fontWeight',
    unit: 'string'
  })
})

it('creates `lineHeight`', () => {
  const result = attributes.lineHeight()

  expect(result).toEqual({
    content: [],
    view: 'factor',
    viewable: ['factor', 'px'],
    reference: 'baseFontSize',
    type: 'lineHeight',
    unit: 'factor'
  })
})

it('creates `spacing`', () => {
  const result = attributes.spacing()

  expect(result).toEqual({
    content: [],
    view: 'factor',
    viewable: ['factor', 'px'],
    reference: 'baseSpacing',
    type: 'spacing',
    unit: 'factor'
  })
})

it('creates `swatch`', () => {
  const result = attributes.swatch()

  expect(result).toEqual({
    content: [],
    view: 'hexa',
    viewable: ['hex', 'hexa', 'rgb', 'rgba'],
    reference: null,
    type: 'swatch',
    unit: 'hexa'
  })
})
