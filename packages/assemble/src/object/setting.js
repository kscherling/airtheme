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

const setting = (next, input, theme) => {
  return next(
    {
      ...input,
      [BASE_FONT_SIZE_KEY]: deserializeAttribute(theme.base.baseFontSize, theme)
        .baseFontSize,
      [BASE_SPACING_KEY]: deserializeAttribute(theme.base.baseSpacing, theme)
        .baseSpacing,
      [BASE_LINE_HEIGHT_KEY]: deserializeAttribute(
        theme.base.baseLineHeight,
        theme
      ).baseLineHeight,
      [FONT_FACE_KEY]: deserializeAttribute(theme.fontFace, theme),
      [SWATCH_KEY]: deserializeAttribute(theme.swatch, theme),
      [SETTING_KEY]: {
        [COLOR_KEY]: deserializeAttribute(theme.setting.color, theme),
        [FONT_FAMILY_KEY]: deserializeAttribute(
          theme.setting.fontFamily,
          theme
        ),
        [FONT_SIZE_KEY]: deserializeAttribute(theme.setting.fontSize, theme),
        [FONT_WEIGHT_KEY]: deserializeAttribute(
          theme.setting.fontWeight,
          theme
        ),
        [SPACING_KEY]: deserializeAttribute(theme.setting.spacing, theme)
      }
    },
    theme
  )
}

export default setting
