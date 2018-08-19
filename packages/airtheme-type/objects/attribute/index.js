import schema from './schema'
import factoryFor from './factoryFor'
import fontSize from './types/fontSize'

const types = {
  fontSize: factoryFor(fontSize, schema),
  hex: factoryFor(hex, schema),
  hexa: factoryFor(hexa, schema),
  px: factoryFor(px, schema),
  reference: factoryFor(reference, schema),
  rem: factoryFor(rem, schema),
  rgb: factoryFor(rgb, schema),
  rgba: factoryFor(rgba, schema),
  string: factoryFor(string, schema)
}

export default types
