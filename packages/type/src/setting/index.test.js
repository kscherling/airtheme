import setting from './index'
import attribute from '../attribute'
import unit from '../unit'

it('creates `setting`', () => {
  const result = setting.base()

  expect(result).toEqual({
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
