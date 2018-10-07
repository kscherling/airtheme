// @flow

/**
 *  Dasherized property string.
 * @example
 * 'background-color'
 */

export type cssAttr = string

/**
 * Camel-cased css property string.
 * @example
 * 'backgroundColor'
 */

export type cssAttrKey = string

/**
 * A css property string.
 * @example
 * css`
 *   background-color: #ffffff;
 *`
 */

export type cssRule = string

/**
 * Map function for extracting `unitContext` from `props`.
 * @example
 * 'const someUnitContext = ({ theme: { context } }) => context'
 */

export type mapContextFn = props => unitContext

/**
 * Map function for extracting `unitContext` from `props`.
 * @example
 * 'const someUnitContext = ({ theme: { context } }) => context'
 */

export type cssForFn = (unitKey, props) => unitContext

/**
 * Object containing `theme` prop analogous to React component props with theme provider.
 */

export type props = {
  theme: theme
}

/**
 * An Airtheme object.
 *
 */

export type theme = {
  swatch: {},
  fontFace: {},
  setting: {
    color: {},
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    spacing: {}
  }
}

/**
 * An object of keyed unit values.
 */

export type unitContext = {}

/**
 * Key for unit in `unitContext`.
 */

export type unitKey = string

/**
 * Value for unit in `unitContext`.
 */

export type unitValue = string | number
