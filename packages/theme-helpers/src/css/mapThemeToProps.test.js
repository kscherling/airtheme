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
const matches = (mapFn, target) => expect(mapFn(props)).toBe(target)

// Base
it('#mapBaseFontSize', () => matches(mapBaseFontSize, theme.baseFontSize))
it('#mapBaseLineHeight', () => matches(mapBaseLineHeight, theme.baseLineHeight))
it('#mapBaseSpacing', () => matches(mapBaseSpacing, theme.baseSpacing))

// Swatch
it('#mapSwatch', () => matches(mapSwatch, theme.swatch))

// Settings
it('#mapColor', () => matches(mapColor, theme.setting.color))
it('#mapFontFamily', () => matches(mapFontFamily, theme.setting.fontFamily))
it('#mapFontSize', () => matches(mapFontSize, theme.setting.fontSize))
it('#mapFontWeight', () => matches(mapFontWeight, theme.setting.fontWeight))
it('#mapSpacing', () => matches(mapSpacing, theme.setting.spacing))
