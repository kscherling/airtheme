import getReferencedAttribute from '../../utils/getReferencedAttribute'
import deserializeAttribute from '../../attribute/deserialize'
import { dig } from 'fp'

const deserializeReference = (
  { value: unitVal, name: unitName } = {},
  attribute,
  theme
) => {
  const referencedAttribute = getReferencedAttribute(attribute, theme)

  if (!referencedAttribute) {
    console.warn(
      `Attempting to deserialize an unknown reference: ${attribute.reference}`
    )
    return
  }

  if (referencedAttribute.unit === 'reference') {
    console.warn(
      'Attempting to deserialize a circular reference. \
      An attribute reference cannot point to another reference'
    )
    return
  }

  const refUnitVal = dig(
    unitVal,
    deserializeAttribute(referencedAttribute, theme)
  )

  return { [unitName]: `${refUnitVal}` }
}

export default deserializeReference
