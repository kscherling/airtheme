import { assign } from 'fp'
import schema from './schema'

// createAttribute
// Attributes are generated only once and must be unique

const createAttribute = ({
  type = schema.type,
  display = schema.display,
  unit = schema.unit,
  displays = schema.displays,
  reference = schema.reference
} = {}) => assign(schema, { type, display, unit, displays, reference })

export const createFactoryForAttribute = schema => () =>
  Object.assign({}, schema)

export default createAttribute
