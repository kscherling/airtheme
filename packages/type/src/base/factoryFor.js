//@flow
import type {
  BaseST,
  BaseFactoryOptions,
  BaseFactoryInstance
} from '../flow/BaseTypes'

/**
 * @name factoryForBase
 * Base factory for
 */

const factoryForBase = (schema: BaseST) => (options: BaseFactoryOptions) =>
  ({ ...schema, ...options }: BaseFactoryInstance)

export default factoryForBase
