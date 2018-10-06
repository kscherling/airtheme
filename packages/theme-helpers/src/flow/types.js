// @flow

/**
 * Map function for extracting `unitContext` from `props`
 */

export type mapContext = props => unitContext

/**
 * Object containing `theme` prop analogous to React component props with theme provider
 */

export type props = {
  theme: theme
}

/**
 * Object containing `theme` prop analogous to React component props with theme provider
 */

export type theme = {
  swatch: {},
  fontFace: {},
  setting: {}
}

/**
 * An object of keyed unit values
 */

export type unitContext = {}

/**
 * Key for unit in `unitContext`
 */

export type unitKey = string

/**
 * Value for unit in `unitContext`
 */

export type unitValue = string | number
