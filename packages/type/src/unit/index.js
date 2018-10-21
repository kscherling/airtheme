import * as types from './types'
import schema from './schema'
import factoryFor from './factoryFor'

const unit = {
  factor: factoryFor(factor, schema),
  hex: factoryFor(hex, schema),
  hexa: factoryFor(hexa, schema),
  px: factoryFor(px, schema),
  reference: factoryFor(reference, schema),
  rem: factoryFor(rem, schema),
  rgb: factoryFor(rgb, schema),
  rgba: factoryFor(rgba, schema),
  string: factoryFor(string, schema)
}

export default unit
