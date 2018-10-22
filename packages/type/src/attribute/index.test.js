import attributes from './index'

it('creates `color`', () => {
  const result = attributes.color()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'Color',
    content: [],
    reference: 'swatch',
    unit: 'Reference',
    view: 'Reference',
    viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba']
  })
})

it('creates `fontFamily`', () => {
  const result = attributes.fontFamily()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'FontFamily',
    content: [],
    reference: 'fontFace',
    unit: 'Reference',
    view: 'Reference',
    viewable: ['Reference']
  })
})

it('creates `fontSize`', () => {
  const result = attributes.fontSize()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'FontSize',
    content: [],
    reference: 'base.baseFontSize',
    unit: 'Factor',
    view: 'Factor',
    viewable: ['Factor', 'Px', 'Rem']
  })
})

it('creates `fontWeight`', () => {
  const result = attributes.fontWeight()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'FontWeight',
    content: [],
    reference: null,
    unit: 'String',
    view: 'String',
    viewable: ['String']
  })
})

it('creates `lineHeight`', () => {
  const result = attributes.lineHeight()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'LineHeight',
    content: [],
    reference: 'base.baseFontSize',
    unit: 'Factor',
    view: 'Factor',
    viewable: ['Factor', 'Px']
  })
})

it('creates `spacing`', () => {
  const result = attributes.spacing()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'Spacing',
    content: [],
    reference: 'base.baseSpacing',
    unit: 'Factor',
    view: 'Factor',
    viewable: ['Factor', 'Px']
  })
})

it('creates `swatch`', () => {
  const result = attributes.swatch()

  expect(result).toEqual({
    __schemaname: 'Attribute',
    __typename: 'Swatch',
    content: [],
    reference: null,
    unit: 'Hexa',
    view: 'Hexa',
    viewable: ['Hex', 'Hexa', 'Rgb', 'Rgba']
  })
})
