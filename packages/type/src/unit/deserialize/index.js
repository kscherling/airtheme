import factor from './factor'
import px from './px'

const deserializers = {
  factor,
  px
}

const deserialize = (unit, attribute, theme) =>
  deserializers[unit.object](unit, attribute, theme)

export default deserialize
