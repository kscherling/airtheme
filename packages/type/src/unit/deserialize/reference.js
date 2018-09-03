import { getReferencedAttribute } from './getters'
import deserializeAttribute from '../../attribute/deserialize'

const deserializeReference = (
  { value: unitVal, name: unitName } = {},
  attribute,
  theme
) => {
  const referencedAttribute = getReferencedAttribute(attribute, theme)
  const refUnitVal = deserializeAttribute(referencedAttribute, theme)[unitVal]

  return { [unitName]: `${refUnitVal}` }
}

export default deserializeReference
