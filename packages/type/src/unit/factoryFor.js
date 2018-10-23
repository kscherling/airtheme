// @flow
import type {
  UnitST,
  UnitFactoryOptions,
  UnitFactoryInstance
} from '../flow/UnitTypes'

/**
 * @name factoryForUnit
 * Unit factory for
 */

const factoryForUnit = (schema: UnitST) => (options: UnitFactoryOptions) =>
  ({ ...schema, ...options }: UnitFactoryInstance)

export default factoryForUnit
