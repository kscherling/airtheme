// prettier-ignore
export const factoryFor = (schema = {}) => ({
  color = schema.color,
  fontFamily = schema.fontFamily,
  fontSize = schema.fontSize,
  fontWeight = schema.fontWeight,
  spacing = schema.spacing
} = {}) => Object.assign({}, {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
})

export default factoryFor
