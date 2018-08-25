import schema from './schema'
import basic from './types/basic'
import factoryFor from './factoryFor'

const theme = {
  basic: factoryFor(basic, schema)
}

export default theme
