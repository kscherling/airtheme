import attributes from './index'

it('creates `color`', () => {
  const result = attributes.color()

  expect(result).toEqual({
    content: {},
    display: 'reference',
    displays: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],
    reference: 'swatch',
    type: 'color',
    unit: 'reference'
  })
})

it('creates `fontSize`', () => {
  const result = attributes.fontSize()

  expect(result).toEqual({
    content: {},
    display: 'factor',
    displays: ['factor', 'px', 'rem'],
    reference: 'baseFontSize',
    type: 'fontSize',
    unit: 'factor'
  })
})
