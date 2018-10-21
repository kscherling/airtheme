import * as types from './types'
import Schema from './schema'
import factoryFor from './factoryFor'

const { Factor, Hex, Hexa, Px, Reference, Rem, Rgba, Str } = types

const unit = {
  factor: factoryFor(Factor, Schema),
  hex: factoryFor(Hex, Schema),
  hexa: factoryFor(Hexa, Schema),
  px: factoryFor(Px, Schema),
  reference: factoryFor(Reference, Schema),
  rem: factoryFor(Rem, Schema),
  rgb: factoryFor(Rgb, Schema),
  rgba: factoryFor(Rgba, Schema),
  string: factoryFor(Str, Schema)
}

export default unit
