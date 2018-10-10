// @flow

import type { props, mapContextFn, unitContext } from '../flow/types'

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapBaseFontSize = (({ theme = {} }) => theme: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapBaseLineHeight = (({ theme = {} }) => theme: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapBaseSpacing = (({ theme = {} }) => theme: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapColor = (({ theme: { setting: { color = {} } } }) => color: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapFontFace = (({ theme: { fontFace = {} } }) =>
  fontFace: mapContextFn)

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapFontFamily = (({ theme: { setting: { fontFamily = {} } } }) => fontFamily: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapFontSize = (({ theme: { setting: { fontSize = {} } } }) => fontSize: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapFontWeight = (({ theme: { setting: { fontWeight = {} } } }) => fontWeight: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapSpacing = (({ theme: { setting: { spacing = {} } } }) => spacing: mapContextFn) // prettier-ignore

/**
 * @param {props}
 * @returns {unitContext}
 */

export const mapSwatch = (({ theme: { swatch = {} } }) => swatch: mapContextFn)
