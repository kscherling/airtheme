import schema from './schema'
import createAttribute, { createFactoryForAttribute } from '../factoryFor'

const attribute = createAttribute(schema)

const create = createFactoryForAttribute(attribute)

export default create
