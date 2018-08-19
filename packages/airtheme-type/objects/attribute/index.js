import schema from './schema'
import factoryFor from './factoryFor'
import fontSize from './types/fontSize'

const types = {
  fontSize: factoryFor(fontSize, schema)
}

export default types
