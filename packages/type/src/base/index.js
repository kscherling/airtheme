import schema from './schema'
import base from './types/base'
import factoryFor from './factoryFor'

const root = {
  base: factoryFor(base, schema)
}

export default root
