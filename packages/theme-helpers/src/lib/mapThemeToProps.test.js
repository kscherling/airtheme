import {
  mapBaseFontSize,
  mapBaseLineHeight,
  mapBaseSpacing,
  mapColor,
  mapFontFamily,
  mapFontSize,
  mapFontWeight,
  mapSpacing,
  mapSwatch
} from './mapThemeToProps'
import theme from '../test/theme'

const props = { theme }
const matches = (mapFn, expected) => expect(mapFn(props)).toBe(expected)

// Base
test('#mapBaseFontSize', () => matches(mapBaseFontSize, theme.baseFontSize))
test('#mapBaseLineHeight', () =>
  matches(mapBaseLineHeight, theme.baseLineHeight))
test('#mapBaseSpacing', () => matches(mapBaseSpacing, theme.baseSpacing))

// Swatch
test('#mapSwatch', () => matches(mapSwatch, theme.swatch))

// Settings
test('#mapColor', () => matches(mapColor, theme.setting.color))
test('#mapFontFamily', () => matches(mapFontFamily, theme.setting.fontFamily))
test('#mapFontSize', () => matches(mapFontSize, theme.setting.fontSize))
test('#mapFontWeight', () => matches(mapFontWeight, theme.setting.fontWeight))
test('#mapSpacing', () => matches(mapSpacing, theme.setting.spacing))
