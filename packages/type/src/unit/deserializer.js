import * as deserializers from './deserializers'

const deserialize = (unit, attribute, theme) => {
  if (!deserializers[unit.__typename]) {
    console.warn(
      `Attempting to deserialize an unknown unit type: ${unit.__typename}`
    )
    return
  }

  return deserializers[unit.__typename](unit, attribute, theme)
}

export default deserialize
