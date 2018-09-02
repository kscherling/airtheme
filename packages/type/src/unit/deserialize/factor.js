// import { dig } from 'fp'

const attributeReference = ({ reference }, theme) => dig(reference, theme)

const deserializeFactor = ({ value }, attribute, theme) => {
  const {} = attributeReference(attribute, theme)

  return `${referenceValue * value}${referenceType}`
}

const deserialize = ({ value, name }, theme) => {
  return `${baseValue * value}${baseType}`
}

export default deserialize
