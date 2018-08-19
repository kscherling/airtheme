import { assign } from 'fp'
import schema from './schema'

// createAttribute
// Attributes are generated only once and must be unique

const createAttribute = ({
  type = schema.type,
  display = schema.display,
  unit = schema.unit,
  options = schema.options,
  reference = schema.reference
} = {}) => assign(schema, { type, display, unit, options, reference })

export default createType
