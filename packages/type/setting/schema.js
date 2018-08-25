import attribute from '../attribute'
import {
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY,
  BASE_SPACING_KEY,
  COLOR_KEY,
  FONT_FAMILY_KEY,
  FONT_SIZE_KEY,
  FONT_WEIGHT_KEY,
  SETTING_KEY,
  SPACING_KEY,
  SWATCH_KEY,
  UTILITY_KEY
} from '@airtheme/core'

// setting
// Settings hash

export default {
  [COLOR_KEY]: attribute.color(),
  [FONT_FAMILY_KEY]: attribute.fontFamily(),
  [FONT_SIZE_KEY]: attribute.fontSize(),
  [FONT_WEIGHT_KEY]: attribute.fontWeight(),
  [SPACING_KEY]: attribute.spacing()
}
