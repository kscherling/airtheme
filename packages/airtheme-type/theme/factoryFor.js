const factoryFor = (
  { name, id, baseFontSize, baseLineHeight, baseSpacing, swatch, setting } = {},
  schema
) => ({
  name: instanceName,
  id: instanceId,
  baseFontSize: instanceBaseFontSize,
  baseLineHeight: instanceBaseLineHeight,
  baseSpacing: instanceBaseSpacing,
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
    swatch: instanceSwatch || swatch || schema.swatch,
    setting: instanceSetting || setting || schema.setting
  })

export default factoryFor
