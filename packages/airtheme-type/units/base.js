// unit
// The base unit for all css units

export const schema = {
  // type
  // string : The name of the unit.

  type: 'air-base-unit',

  // value
  // Any : The value of the unit

  value: null
}

// createUnit
// Accepts a type and returns a unit

const createUnit = ({ type } = schema) => Object.assign({}, schema, { type })

// createFactory
// Accepts a unit object and returns a function that is used to create the unit

export const createUnitFactoryFor = unit => ({ value } = {}) =>
  Object.assign({}, unit, { value })

export default createUnit
