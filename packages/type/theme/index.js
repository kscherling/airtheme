import schema from './schema'
import base from './types/base'
import factoryFor from './factoryFor'

const theme = {
  base: factoryFor(base, schema)
}

export default theme
