// @flow
import type { Typename } from './GlobalTypes'

/**
 * @description Unit schema Type
 */

export type UnitST = {
  __schemaname: 'Base',
  __typename: ?Typename,
  name: ?string,
  ordinal: ?number,
  value: ?string
}
