import factor from './factor'

const deserializers = {
  factor
}

const deserialize = (unit, attribute, theme) =>
  deserializers[unit.object](unit, attribute, theme)

export default deserialize
