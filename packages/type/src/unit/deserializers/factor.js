import getReferencedAttribute from '../../utils/getReferencedAttribute'

const downcase = str => str && str.toLowerCase()

const deserializeFactor = (
  { value: unitVal, name: unitName } = {},
  attribute,
  theme
) => {
  // TODO: Does not account for arrays of units (base only)
  const {
    content: { value: refValue, __typename } = {}
  } = getReferencedAttribute(attribute, theme)

  return { [unitName]: `${refValue * unitVal}${downcase(__typename)}` }
}

export default deserializeFactor
