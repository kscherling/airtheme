const factoryFor = (
  {
    name,
    id,
    baseFontSize,
    baseLineHeight,
    baseSpacing,
    fontFace,
    swatch,
    setting
  } = {},
  schema
) => ({
  name: instanceName,
  id: instanceId,
  baseFontSize: instanceBaseFontSize,
  baseLineHeight: instanceBaseLineHeight,
  baseSpacing: instanceBaseSpacing,
  fontFace: instanceFontFace,
  swatch: instanceSwatch,
  setting: instanceSetting
} = {}) =>
  Object.assign({}, schema, {
    name: instanceName || name || schema.name,
    id: instanceId || id || schema.id,
    baseFontSize: instanceBaseFontSize || baseFontSize || schema.baseFontSize,
    baseLineHeight:
      instanceBaseLineHeight || baseLineHeight || schema.baseLineHeight,
    baseSpacing: instanceBaseSpacing || baseSpacing || schema.baseSpacing,
    fontFace: instanceFontFace || fontFace || schema.fontFace,
    swatch: instanceSwatch || swatch || schema.swatch,
    setting: instanceSetting || setting || schema.setting
  })

export default factoryFor
