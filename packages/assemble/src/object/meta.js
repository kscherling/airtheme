import { deserializeAttribute } from '@airtheme/type'
import { ID_KEY, NAME_KEY, VERSION_KEY } from '@airtheme/core'

const meta = (next, input, theme) => {
  return next(
    {
      ...input,
      [ID_KEY]: theme[ID_KEY],
      [NAME_KEY]: theme[NAME_KEY],
      [VERSION_KEY]: theme[VERSION_KEY]
    },
    theme
  )
}

export default meta
