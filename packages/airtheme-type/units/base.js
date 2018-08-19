// unit
// The base unit for all css units

export const schema = {
  // type
  // string : The name of the unit.

  type: 'baseUnit',

  // value
  // Any : The value of the unit

  value: null
}

// createUnit
// Accepts a type and returns a unit

const createUnit = ({ type = schema.type } = {}) =>
  Object.assign({}, schema, { type })

// createFactory
// Accepts a unit object and returns a function used to create the unit instances

export const createUnitFactoryFor = unit => ({ value } = {}) =>
  Object.assign({}, unit, { value })

export default createUnit
