import {
  mapBaseFontSize,
  mapBaseLineHeight,
  mapBaseSpacing,
  mapSwatch,
  mapFontFace,
  mapColor,
  mapFontFamily,
  mapFontSize,
  mapFontWeight,
  mapSpacing
} from './lib/mapThemeToProps'
import getWithTheme from './lib/getWithTheme'

/*
For root level nodes we preload the 'key' arg so user does not have to supply.

const C = styled.div `
  font-size: ${baseFontSize}

  vs

  font-size: ${baseFontSize('baseFontSize')}
`

For all others, the user supplies the 'key', props are curried.

const C = styled.div `
  color: ${color('primary')}
`
*/

export const baseFontSize = getWithTheme(mapBaseFontSize)('baseFontSize')
export const baseLineHeight = getWithTheme(mapBaseLineHeight)('baseLineHeight')
export const baseSpacing = getWithTheme(mapBaseSpacing)('baseSpacing')
export const color = getWithTheme(mapColor)
export const fontFace = getWithTheme(mapFontFace)
export const fontFamily = getWithTheme(mapFontFamily)
export const fontSize = getWithTheme(mapFontSize)
export const fontWeight = getWithTheme(mapFontWeight)
export const spacing = getWithTheme(mapSpacing)
export const swatch = getWithTheme(mapSwatch)
