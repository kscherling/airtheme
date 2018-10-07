// @flow

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
} from './lib/mapPropsToContext'
import getWithContext from './lib/getWithContext'

import type { props, unitValue, unitKey } from './flow/types'

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const baseFontSize = getWithContext(mapBaseFontSize)('baseFontSize')
export const baseLineHeight = getWithContext(mapBaseLineHeight)('baseLineHeight') // prettier-ignore
export const baseSpacing = getWithContext(mapBaseSpacing)('baseSpacing')
export const color = getWithContext(mapColor)
export const fontFace = getWithContext(mapFontFace)
export const fontFamily = getWithContext(mapFontFamily)
export const fontSize = getWithContext(mapFontSize)
export const fontWeight = getWithContext(mapFontWeight)
export const spacing = getWithContext(mapSpacing)
export const swatch = getWithContext(mapSwatch)
