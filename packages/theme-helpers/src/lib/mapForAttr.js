import invariant from 'invariant'
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
  GRID_COLUMN_GAP,
  GRID_GAP,
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
} from './properties'

import {
  mapBaseFontSize,
  mapBaseLineHeight,
  mapBaseSpacing,
  mapColor,
  mapFontFamily,
  mapFontSize,
  mapFontWeight,
  mapSpacing
} from './mapThemeToProps'

const noimp = () => null

export default {
  [BACKGROUND_COLOR]: mapColor,
  [BACKGROUND]: mapColor,
  [BORDER_BOTTOM_COLOR]: mapColor,
  [BORDER_BOTTOM_LEFT_RADIUS]: noimp,
  [BORDER_BOTTOM_RIGHT_RADIUS]: noimp,
  [BORDER_COLOR]: mapColor,
  [BORDER_LEFT_COLOR]: mapColor,
  [BORDER_RADIUS]: noimp,
  [BORDER_RIGHT_COLOR]: mapColor,
  [BORDER_TOP_COLOR]: mapColor,
  [BORDER_TOP_LEFT_RADIUS]: noimp,
  [BORDER_TOP_RIGHT_RADIUS]: noimp,
  [BOTTOM]: mapSpacing,
  [BOX_SHADOW]: noimp,
  [CARET_COLOR]: mapColor,
  [COLOR]: mapColor,
  [FONT_FAMILY]: mapFontFamily,
  [FONT_SIZE]: mapFontSize,
  [FONT_WEIGHT]: mapFontWeight,
  [GRID_GAP]: mapSpacing,
  [GRID_COLUMN_GAP]: mapSpacing,
  [GRID_ROW_GAP]: mapSpacing,
  [HEIGHT]: mapSpacing,
  [LEFT]: mapSpacing,
  [LINE_HEIGHT]: noimp,
  [MARGIN_BOTTOM]: mapSpacing,
  [MARGIN_LEFT]: mapSpacing,
  [MARGIN_RIGHT]: mapSpacing,
  [MARGIN_TOP]: mapSpacing,
  [MARGIN]: mapSpacing,
  [MAX_HEIGHT]: mapSpacing,
  [MAX_WIDTH]: mapSpacing,
  [MIN_HEIGHT]: mapSpacing,
  [MIN_WIDTH]: mapSpacing,
  [OPACITY]: noimp,
  [OUTLINE_COLOR]: mapColor,
  [PADDING_BOTTOM]: mapSpacing,
  [PADDING_LEFT]: mapSpacing,
  [PADDING_RIGHT]: mapSpacing,
  [PADDING_TOP]: mapSpacing,
  [PADDING]: mapSpacing,
  [RIGHT]: mapSpacing,
  [TOP]: mapSpacing,
  [WIDTH]: mapSpacing,
  [ZINDEX]: noimp
}
