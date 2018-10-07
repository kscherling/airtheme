import {
  mapBaseFontSize,
  mapBaseLineHeight,
  mapBaseSpacing,
  mapColor,
  mapFontFace,
  mapFontFamily,
  mapFontSize,
  mapFontWeight,
  mapSpacing,
  mapSwatch
} from './mapPropsToContext'
import theme from '../test/theme'

const props = { theme }

const expectMap = (name, mapFn, expected) =>
  test(name, () => expect(mapFn(props)).toBe(expected))

expectMap('#mapBaseFontSize', mapBaseFontSize, theme)
expectMap('#mapBaseLineHeight', mapBaseLineHeight, theme)
expectMap('#mapBaseSpacing', mapBaseSpacing, theme)
expectMap('#mapColor', mapColor, theme.setting.color)
expectMap('#mapFontFace', mapFontFace, theme.fontFace)
expectMap('#mapFontFamily', mapFontFamily, theme.setting.fontFamily)
expectMap('#mapFontSize', mapFontSize, theme.setting.fontSize)
expectMap('#mapFontWeight', mapFontWeight, theme.setting.fontWeight)
expectMap('#mapSpacing', mapSpacing, theme.setting.spacing)
expectMap('#mapSwatch', mapSwatch, theme.swatch)
