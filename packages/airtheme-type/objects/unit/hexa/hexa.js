import createUnit, { createFactoryForUnit } from './factoryFor'
import schema from './schema'

const hexa = createUnit(schema)

const createHexa = createFactory(hexa)

export default createHexa
