import getReferencedAttribute from '../../utils/getReferencedAttribute'

const deserializeFactor = (
  { value: unitVal, name: unitName } = {},
  attribute,
  theme
) => {
  // TODO: Does not account for arrays of units (base only)
  console.log(attribute, theme)
  console.log(getReferencedAttribute({ reference: 'baseFontSize' }, theme))

  const { content: { value: refValue, object } = {} } = getReferencedAttribute(
    attribute,
    theme
  )

  return { [unitName]: `${refValue * unitVal}${object}` }
}

export default deserializeFactor
