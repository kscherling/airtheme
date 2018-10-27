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

const setting = (nextFn, accumulator, themeData) => {
  console.log(
    deserializeAttribute(themeData.base.baseFontSize, themeData).baseFontSize
  )
  const result = nextFn(
    {
      ...accumulator,
      [BASE_FONT_SIZE_KEY]: deserializeAttribute(
        themeData.base.baseFontSize,
        themeData
      ).baseFontSize,
      [BASE_SPACING_KEY]: deserializeAttribute(
        themeData.base.baseSpacing,
        themeData
      ).baseSpacing,
      [BASE_LINE_HEIGHT_KEY]: deserializeAttribute(
        themeData.base.baseLineHeight,
        themeData
      ).baseLineHeight,
      [FONT_FACE_KEY]: deserializeAttribute(themeData.fontFace, themeData),
      [SWATCH_KEY]: deserializeAttribute(themeData.swatch, themeData),
      [SETTING_KEY]: {
        [COLOR_KEY]: deserializeAttribute(themeData.setting.color, themeData),
        [FONT_FAMILY_KEY]: deserializeAttribute(
          themeData.setting.fontFamily,
          themeData
        ),
        [FONT_SIZE_KEY]: deserializeAttribute(
          themeData.setting.fontSize,
          themeData
        ),
        [FONT_WEIGHT_KEY]: deserializeAttribute(
          themeData.setting.fontWeight,
          themeData
        ),
        [SPACING_KEY]: deserializeAttribute(
          themeData.setting.spacing,
          themeData
        )
      }
    },
    themeData
  )
  // console.log('accumulator', accumulator)
  // console.log('setting', result)
  // console.log('setting', themeData)

  return result
}
export default setting
