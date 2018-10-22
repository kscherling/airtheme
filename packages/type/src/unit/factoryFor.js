// @flow
import type {
  UnitST,
  UnitFactoryOptions,
  UnitFactoryInstance
} from '../flow/UnitTypes'

const factoryForUnit = (schema: UnitST) => (options: UnitFactoryOptions) =>
  ({ ...schema, ...options }: UnitFactoryInstance)

export default factoryForUnit
