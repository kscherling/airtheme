import { mapBaseSpacing } from '@airtheme/make'

const setting = (next, input, theme) =>
  next(
    {
      ...input,
      setting: {
        color: deserialize(theme.setting.color, theme)
      }
    },
    theme
  )

export default setting

// [BASE_FONT_SIZE_PATH]: deserialize(BASE_FONT_SIZE_PATH, theme),
// [BASE_LINE_HEIGHT_PATH]: deserialize(BASE_LINE_HEIGHT_PATH, theme)
