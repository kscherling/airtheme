import * as types from './types'
import Schema from './schema'
import factoryFor from './factoryFor'

const {
  Color,
  FontFamily,
  FontSize,
  FontFace,
  FontWeight,
  LineHeight,
  Spacing,
  Swatch,
  BaseSpacing,
  BaseLineHeight,
  BaseFontSize
} = types

const attribute = {
  baseFontSize: factoryFor(BaseFontSize, Schema),
  baseSpacing: factoryFor(BaseSpacing, Schema),
  baseLineHeight: factoryFor(BaseLineHeight, Schema),
  color: factoryFor(Color, Schema),
  fontFamily: factoryFor(FontFamily, Schema),
  fontSize: factoryFor(FontSize, Schema),
  fontWeight: factoryFor(FontWeight, Schema),
  lineHeight: factoryFor(LineHeight, Schema),
  fontFace: factoryFor(FontFace, Schema),
  fontFamily: factoryFor(FontFamily, Schema),
  spacing: factoryFor(Spacing, Schema),
  swatch: factoryFor(Swatch, Schema)
}

export default attribute
