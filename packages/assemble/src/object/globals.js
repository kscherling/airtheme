import {
  BASE_SPACING_PATH,
  BASE_FONT_SIZE_PATH,
  BASE_LINE_HEIGHT_PATH
} from '@airtheme/core'
import { mapBaseSpacing } from '@airtheme/make'
// import deserializeType from 'kit/types/deserializeType'

// const deserialize = (path, theme) => deserializeType(dig(path, theme), theme)

const globals = (next, input, theme) =>
  next(
    {
      ...input,
      [BASE_SPACING_PATH]: theme[BASE_SPACING_PATH]
    },
    theme
  )

export default globals

// [BASE_FONT_SIZE_PATH]: deserialize(BASE_FONT_SIZE_PATH, theme),
// [BASE_LINE_HEIGHT_PATH]: deserialize(BASE_LINE_HEIGHT_PATH, theme)
