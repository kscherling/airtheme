import { dig } from 'fp'
import { getReferencedAttribute } from './getters'

const deserializeFactor = (
  { value: unitVal, name: unitName } = {},
  attribute,
  theme
) => {
  const { content: { value: refValue, object } = {} } = getReferencedAttribute(
    attribute,
    theme
  )

  return { [unitName]: `${refValue * unitVal}${object}` }
}

export default deserializeFactor
