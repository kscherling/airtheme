// prettier-ignore
export const factoryFor = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
} = {}, schema) => ({
  color: instanceColor,
  fontFamily: instanceFontFamily,
  fontSize: instanceFontSize,
  fontWeight: instanceFontWeight,
  spacing: instanceSpacing
} = {}) => Object.assign({}, schema, {
  color: instanceColor || color || schema.color,
  fontFamily: instanceFontFamily || fontFamily || schema.fontFamily,
  fontSize: instanceFontSize || fontSize || schema.fontSize,
  fontWeight: instanceFontWeight || fontWeight || schema.fontWeight,
  spacing: instanceSpacing || spacing || schema.spacing
})

export default factoryFor
