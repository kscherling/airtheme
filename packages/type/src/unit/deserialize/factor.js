import { getReferencedAttribute } from './getters'

const deserializeFactor = (
  { value: unitVal, name: unitName } = {},
  attribute,
  theme
) => {
  // TODO: Does not account for arrays of units (base only)
  const { content: { value: refValue, object } = {} } = getReferencedAttribute(
    attribute,
    theme
  )

  return { [unitName]: `${refValue * unitVal}${object}` }
}

export default deserializeFactor
