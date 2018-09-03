import { deserializeAttribute } from '@airtheme/type'

const setting = (next, input, theme) => {
  console.log(theme.setting.color)
  return next(
    {
      ...input,
      setting: {
        // color: deserializeAttribute(theme.setting.color, theme),
        fontFamily: deserializeAttribute(theme.setting.fontFamily, theme),
        fontSize: deserializeAttribute(theme.setting.fontSize, theme),
        fontWeight: deserializeAttribute(theme.setting.fontWeight, theme),
        spacing: deserializeAttribute(theme.setting.spacing, theme)
      }
    },
    theme
  )
}

export default setting
