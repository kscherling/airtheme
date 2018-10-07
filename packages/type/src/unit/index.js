import schema from './schema'
import factoryFor from './factoryFor'
import factor from './types/factor'
import hex from './types/hex'
import hexa from './types/hexa'
import px from './types/px'
import reference from './types/reference'
import rem from './types/rem'
import rgb from './types/rgb'
import rgba from './types/rgba'
import string from './types/string'

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
