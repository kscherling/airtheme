//@flow
import type {
  AttributeST,
  AttributeFactoryOptions,
  AttributeFactoryInstance
} from '../flow/AttributeTypes'

/**
 * @name factoryForAttribute
 * Attribute factory for
 */

const factoryForAttribute = (schema: AttributeST) => (
  options: AttributeFactoryOptions
) => ({ ...schema, ...options }: AttributeFactoryInstance)

export default factoryForAttribute
