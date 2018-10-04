import { css } from 'styled-components'
import cssForAttr from './css/cssForAttr'
import {
  BACKGROUND_COLOR,
  BACKGROUND,
  BORDER_BOTTOM_COLOR,
  BORDER_BOTTOM_LEFT_RADIUS,
  BORDER_BOTTOM_RIGHT_RADIUS,
  BORDER_BOTTOM,
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
  TOP,
  WIDTH
} from './css/properties'

const cssFor = (cssAttr, mapFn) => props => css`
  [cssattr]: ${mapFn(props)};
`

export const background = cssForAttr(BACKGROUND)
export const backgroundColor = cssForAttr(BACKGROUND_COLOR)
// Background

// Border
// export const borderColor = cssFor('border-color', mapColor)
// export const borderBottomColor = cssFor('border-bottom-color', mapColor)
// export const borderLeftColor = cssFor('border-left-color', mapColor)
// export const borderRightColor = cssFor('border-right-color', mapColor)
// export const borderTopColor = cssFor('border-top-color', mapColor)

// Dimension
// export const height = cssFor('height', mapSpacing)
// export const maxHeight = cssFor('max-height', mapSpacing)
// export const maxWidth = cssFor('max-width', mapSpacing)
// export const minHeight = cssFor('min-height', mapSpacing)
// export const minWidth = cssFor('min-width', mapSpacing)
// export const width = cssFor('width', mapSpacing)

// Font
// export const color = cssFor('color', mapColor)
// export const fontFamily = cssFor('font-family', mapFontFamily)
// export const fontSize = cssFor('font-size', mapFontSize)
// export const fontWeight = cssFor('font-weight', mapFontWeight)

// Position
// export const zIndex = cssFor('z-index', 'zIndex')
// export const top = cssFor('top', mapSpacing)
// export const left = cssFor('left', mapSpacing)
// export const right = cssFor('right', mapSpacing)
// export const bottom = cssFor('bottom', mapSpacing)

// Margin
// export const margin = cssFor('margin', mapSpacing)
// export const marginTop = cssFor('margin-top', mapSpacing)
// export const marginBottom = cssFor('margin-bottom', mapSpacing)
// export const marginLeft = cssFor('margin-left', mapSpacing)
// export const marginRight = cssFor('margin-right', mapSpacing)

// Padding
// export const padding = cssFor('padding', mapSpacing)
// export const paddingTop = cssFor('padding-top', mapSpacing)
// export const paddingBottom = cssFor('padding-bottom', mapSpacing)
// export const paddingLeft = cssFor('padding-left', mapSpacing)
// export const paddingRight = cssFor('padding-right', mapSpacing)

// BorderRadius
// export const borderRadius = cssFor('border-radius', 'borderRadius')
// export const borderTopLeftRadius = cssFor( 'border-top-left-radius', 'borderRadius') //prettier-ignore
// export const borderTopRightRadius = cssFor( 'border-top-right-radius', 'borderRadius') //prettier-ignore
// export const borderBottomLeftRadius = cssFor( 'border-bottom-left-radius', 'borderRadius') //prettier-ignore
// export const borderBottomRightRadius = cssFor( 'border-bottom-right-radius', 'borderRadius') //prettier-ignore

// boxShadow
// export const boxShadow = cssFor('box-shadow', 'boxShadow')
