import attribute from '../../attribute'
import {
  COLOR_KEY,
  FONT_FAMILY_KEY,
  FONT_SIZE_KEY,
  FONT_WEIGHT_KEY,
  SPACING_KEY
} from '@airtheme/core'

// base
// The base setting object

export default {
  [COLOR_KEY]: attribute.color(),
  [FONT_FAMILY_KEY]: attribute.fontFamily(),
  [FONT_SIZE_KEY]: attribute.fontSize(),
  [FONT_WEIGHT_KEY]: attribute.fontWeight(),
  [SPACING_KEY]: attribute.spacing()
}
