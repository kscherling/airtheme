import * as deserializers from './deserializers'

const deserialize = (unit, attribute, theme) => {
  if (!deserializers[unit.object]) {
    console.warn(
      `Attempting to deserialize an unknown unit type: ${unit.object}`
    )
    return
  }

  return deserializers[unit.object](unit, attribute, theme)
}

export default deserialize
