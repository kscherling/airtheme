import { assign } from 'fp'
import schema from './schema'

// createUnit
// Accepts a type and returns a unit

const createUnit = ({ type = schema.type } = {}) => assign(schema, { type })

// createFactory
// Accepts a unit object and returns a function used to create the unit instances

export const createFactoryForUnit = unit => ({ value } = {}) =>
  assign(unit, { value })

export default createUnit
