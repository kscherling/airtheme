import createUnit, { createFactoryForUnit } from './factoryFor'
import schema from './schema'

const hex = createUnit(schema)

const createHex = createFactoryForUnit(hex)

export default createHex
