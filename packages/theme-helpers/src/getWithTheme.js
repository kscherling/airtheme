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
import getWithContext from './lib/getWithContext'

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

export const baseFontSize = getWithContext(mapBaseFontSize)('baseFontSize')
export const baseLineHeight = getWithContext(mapBaseLineHeight)(
  'baseLineHeight'
)
export const baseSpacing = getWithContext(mapBaseSpacing)('baseSpacing')
export const color = getWithContext(mapColor)
export const fontFace = getWithContext(mapFontFace)
export const fontFamily = getWithContext(mapFontFamily)
export const fontSize = getWithContext(mapFontSize)
export const fontWeight = getWithContext(mapFontWeight)
export const spacing = getWithContext(mapSpacing)
export const swatch = getWithContext(mapSwatch)
