const factoryFor = (
  { name, id, fontFace, swatch, setting, base } = {},
  schema
) => ({
  name: instanceName,
  id: instanceId,
  fontFace: instanceFontFace,
  swatch: instanceSwatch,
  setting: instanceSetting,
  base: instanceBase
} = {}) =>
  Object.assign({}, schema, {
    name: instanceName || name || schema.name,
    id: instanceId || id || schema.id,
    fontFace: instanceFontFace || fontFace || schema.fontFace,
    swatch: instanceSwatch || swatch || schema.swatch,
    setting: instanceSetting || setting || schema.setting,
    base: instanceBase || base || schema.base
  })

export default factoryFor
