import { css } from 'styled-components'
import cssRuleFor from './lib/cssRuleFor'
import {
  BACKGROUND_COLOR,
  BACKGROUND,
  BORDER_BOTTOM_COLOR,
  BORDER_BOTTOM_LEFT_RADIUS,
  BORDER_BOTTOM_RIGHT_RADIUS,
  BORDER_COLOR,
  BORDER_LEFT_COLOR,
  BORDER_RADIUS,
  BORDER_RIGHT_COLOR,
  BORDER_TOP_COLOR,
  BORDER_TOP_LEFT_RADIUS,
  BORDER_TOP_RIGHT_RADIUS,
  BOTTOM,
  BOX_SHADOW,
  CARET_COLOR,
  COLOR,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  GRID_GAP,
  GRID_COLUMN_GAP,
  GRID_ROW_GAP,
  HEIGHT,
  LEFT,
  LINE_HEIGHT,
  MARGIN_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  MARGIN_TOP,
  MARGIN,
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_HEIGHT,
  MIN_WIDTH,
  OPACITY,
  OUTLINE_COLOR,
  PADDING_BOTTOM,
  PADDING_LEFT,
  PADDING_RIGHT,
  PADDING_TOP,
  PADDING,
  RIGHT,
  TOP,
  WIDTH,
  ZINDEX
} from './constants/cssAttrs'

import type { props, cssRule, unitKey } from './flow/types'

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const backgroundColor = (cssRuleFor(BACKGROUND_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const background = (cssRuleFor(BACKGROUND): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderBottomColor = (cssRuleFor(BORDER_BOTTOM_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderBottomLeftRadius = (cssRuleFor(BORDER_BOTTOM_LEFT_RADIUS): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderBottomRightRadius = (cssRuleFor(BORDER_BOTTOM_RIGHT_RADIUS): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderColor = (cssRuleFor(BORDER_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderLeftColor = (cssRuleFor(BORDER_LEFT_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderRadius = (cssRuleFor(BORDER_RADIUS): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderRightColor = (cssRuleFor(BORDER_RIGHT_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderTopColor = (cssRuleFor(BORDER_TOP_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderTopLeftRadius = (cssRuleFor(BORDER_TOP_LEFT_RADIUS): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const borderTopRightRadius = (cssRuleFor(BORDER_TOP_RIGHT_RADIUS): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const bottom = (cssRuleFor(BOTTOM): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const boxShadow = (cssRuleFor(BOX_SHADOW): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const caretColor = (cssRuleFor(CARET_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const color = (cssRuleFor(COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontFamily = (cssRuleFor(FONT_FAMILY): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontSize = (cssRuleFor(FONT_SIZE): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const fontWeight = (cssRuleFor(FONT_WEIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const gridGap = (cssRuleFor(GRID_GAP): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const gridColumnGap = (cssRuleFor(GRID_COLUMN_GAP): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const gridRowGap = (cssRuleFor(GRID_ROW_GAP): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const height = (cssRuleFor(HEIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const left = (cssRuleFor(LEFT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const lineHeight = (cssRuleFor(LINE_HEIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const marginBottom = (cssRuleFor(MARGIN_BOTTOM): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const marginLeft = (cssRuleFor(MARGIN_LEFT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const marginRight = (cssRuleFor(MARGIN_RIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const marginTop = (cssRuleFor(MARGIN_TOP): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const margin = (cssRuleFor(MARGIN): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const maxHeight = (cssRuleFor(MAX_HEIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const maxWidth = (cssRuleFor(MAX_WIDTH): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const minHeight = (cssRuleFor(MIN_HEIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const minWidth = (cssRuleFor(MIN_WIDTH): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const opacity = (cssRuleFor(OPACITY): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const outlineColor = (cssRuleFor(OUTLINE_COLOR): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const paddingBottom = (cssRuleFor(PADDING_BOTTOM): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const paddingLeft = (cssRuleFor(PADDING_LEFT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const paddingRight = (cssRuleFor(PADDING_RIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const paddingTop = (cssRuleFor(PADDING_TOP): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const padding = (cssRuleFor(PADDING): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const right = (cssRuleFor(RIGHT): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const top = (cssRuleFor(TOP): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const width = (cssRuleFor(WIDTH): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore

/**
 * @param {unitKey}
 * @param {props}
 * @returns {unitValue}
 */

export const zIndex = (cssRuleFor(ZINDEX): (unitKey: unitKey, props: props) => cssRule) //prettier-ignore
