// createFactoryFor
// Accepts a unit object and root schema
// returns a function used to create new unit instances

// prettier-ignore
const factoryFor =
  ({ type } = {}, schema) =>
  ({ value, reference, ordinal } = {}) =>
    Object.assign(
      {},
      schema,
      { type },
      {
        value: value || schema.value,
        reference: reference || schema.reference,
        ordinal: ordinal || schema.ordinal
      }
    )

export default factoryFor
