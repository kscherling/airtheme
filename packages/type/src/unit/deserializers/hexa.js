const tinycolor = require('tinycolor2')

const toCssColorString = hexa => {
  const opaque = /^#\S{6}ff$/i
  const isOpaque = opaque.test(hexa)

  return isOpaque
    ? tinycolor(hexa).toHexString()
    : tinycolor(hexa).toRgbString()
}

const deserializeHexa = (
  { value: unitValue, name: unitName } = {},
  _attribute,
  _theme
) => {
  return { [unitName]: `${toCssColorString(unitValue)}` }
}

export default deserializeHexa
