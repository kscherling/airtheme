// createFactoryFor
// Accepts a unit object and root schema
// returns a function used to create new unit instances

// prettier-ignore
const factoryFor =
  ({ type } = {}, schema) =>
  ({ value, name, ordinal } = {}) =>
    Object.assign(
      {},
      schema,
      { type },
      {
        value: value || schema.value,
        name: name || schema.name,
        ordinal: ordinal || schema.ordinal
      }
    )

export default factoryFor
