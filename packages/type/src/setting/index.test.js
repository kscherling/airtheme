import setting from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `setting`', () => {
  const result = setting.base()

  console.log(result)

  expect(result).toEqual({
    __schemaname: 'Setting',
    __typename: '',
    color: {
      __schemaname: 'Attribute',
      __typename: '',
      content: [],
      reference: 'swatch',
      unit: 'Reference',
      view: 'Reference',
      viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba'],
      object: undefined
    },
    fontFamily: {
      __schemaname: 'Attribute',
      __typename: '',
      content: [],
      reference: 'fontFace',
      unit: 'Reference',
      view: 'Reference',
      viewable: ['Reference'],
      object: undefined
    },
    fontSize: {
      __schemaname: 'Attribute',
      __typename: '',
      content: [],
      reference: 'base.baseFontSize',
      unit: 'Factor',
      view: 'Factor',
      viewable: ['Factor', 'Px', 'Rem'],
      object: undefined
    },
    fontWeight: {
      __schemaname: 'Attribute',
      __typename: '',
      content: [],
      reference: '',
      unit: 'String',
      view: 'String',
      viewable: ['String'],
      object: undefined
    },
    spacing: {
      __schemaname: 'Attribute',
      __typename: '',
      content: [],
      reference: 'base.baseSpacing',
      unit: 'Factor',
      view: 'Factor',
      viewable: ['Factor', 'Px'],
      object: undefined
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
    __schemaname: 'Attribute',
    __typename: 'Color',
    content: [
      {
        __schemaname: 'Unit',
        __typename: 'Hexa',
        name: '',
        ordinal: 0,
        value: '#000000, 1'
      }
    ],
    reference: 'swatch',
    unit: 'Reference',
    view: 'Reference',
    viewable: ['Reference', 'Hex', 'Hexa', 'Rgb', 'Rgba']
  })
})
