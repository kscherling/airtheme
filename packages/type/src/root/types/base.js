import attribute from '../../attribute'
import {
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY,
  BASE_SPACING_KEY
} from '@airtheme/core'

// Root
// Root hash

export default {
  [BASE_FONT_SIZE_KEY]: attribute.baseFontSize(),
  [BASE_LINE_HEIGHT_KEY]: attribute.baseLineHeight(),
  [BASE_SPACING_KEY]: attribute.baseSpacing()
}
