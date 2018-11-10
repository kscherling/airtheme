import { deserializeAttribute } from '@airtheme/type'
import {
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY,
  BASE_SPACING_KEY,
  COLOR_KEY,
  FONT_FACE_KEY,
  FONT_FAMILY_KEY,
  FONT_SIZE_KEY,
  FONT_WEIGHT_KEY,
  SETTING_KEY,
  SPACING_KEY,
  SWATCH_KEY
} from '@airtheme/core'

const setting = (nextFn, accumulator, themeData) =>
  nextFn(
    {
      ...accumulator
    },
    themeData
  )

export default setting
