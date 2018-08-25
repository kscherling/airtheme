import schema from './schema'
import factoryFor from './factoryFor'
import color from './types/color'
import fontFamily from './types/fontFamily'
import fontSize from './types/fontSize'
import fontFace from './types/fontFace'
import fontWeight from './types/fontWeight'
import lineHeight from './types/lineHeight'
import spacing from './types/spacing'
import swatch from './types/swatch'

const attribute = {
  color: factoryFor(color, schema),
  fontFamily: factoryFor(fontFamily, schema),
  fontSize: factoryFor(fontSize, schema),
  fontWeight: factoryFor(fontWeight, schema),
  lineHeight: factoryFor(lineHeight, schema),
  fontFace: factoryFor(fontFace, schema),
  fontFamily: factoryFor(fontFamily, schema),
  spacing: factoryFor(spacing, schema),
  swatch: factoryFor(swatch, schema)
}

export default attribute
