import schema from './schema'
import base from './types/base'
import factoryFor from './factoryFor'

const setting = {
  base: factoryFor(base, schema)
}

export default setting
