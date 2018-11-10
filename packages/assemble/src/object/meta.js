import { deserializeAttribute } from '@airtheme/type'
import { ID_KEY, NAME_KEY, VERSION_KEY } from '@airtheme/core'

const meta = (nextFn, accumulator, themeData) =>
  nextFn(
    {
      ...accumulator,
      [ID_KEY]: themeData[ID_KEY],
      [NAME_KEY]: themeData[NAME_KEY],
      [VERSION_KEY]: themeData[VERSION_KEY]
    },
    themeData
  )

export default meta
