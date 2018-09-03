import { deserializeAttribute } from '@airtheme/type'

import {
  BASE_SPACING_KEY,
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY
} from '@airtheme/core'

const global = (next, input, theme) => {
  return next(
    {
      ...input,
      [BASE_FONT_SIZE_KEY]: deserializeAttribute(
        theme.base.baseFontSize,
        theme
      ),
      [BASE_SPACING_KEY]: deserializeAttribute(theme.base.baseSpacing, theme),
      [BASE_LINE_HEIGHT_KEY]: deserializeAttribute(
        theme.base.baseLineHeight,
        theme
      )
    },
    theme
  )
}

export default global
