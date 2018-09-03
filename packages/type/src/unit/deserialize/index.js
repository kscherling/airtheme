import factor from './factor'
import px from './px'
import string from './string'
import reference from './reference'

const deserializers = {
  factor,
  px,
  string,
  reference
}

const deserialize = (unit, attribute, theme) =>
  deserializers[unit.object](unit, attribute, theme)

export default deserialize
