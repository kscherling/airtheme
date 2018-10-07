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
 * @param {props}
 * @returns {unitValue}
 */

export const baseFontSize = (getWithContext(mapBaseFontSize)('baseFontSize'): (props: props) => unitValue) // prettier-ignore

/**
 * @param {props}
 * @returns {unitValue}
 */

export const baseLineHeight = (getWithContext(mapBaseLineHeight)('baseLineHeight'): (props: props) => unitValue) // prettier-ignore

/**
 * @param {props}
 * @returns {unitValue}
 */

export const baseSpacing = (getWithContext(mapBaseSpacing)('baseSpacing'): (props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const color = (getWithContext(mapColor): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontFace = (getWithContext(mapFontFace): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontFamily = (getWithContext(mapFontFamily): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontSize = (getWithContext(mapFontSize): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontWeight = (getWithContext(mapFontWeight): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const spacing = (getWithContext(mapSpacing): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const swatch = (getWithContext(mapSwatch): (unitKey: unitKey, props: props) => unitValue) // prettier-ignore
