// @flow
import type { Typename } from './GlobalTypes'

/**
 * @description Setting schema type
 */

export type SettingST = {
  __schemaname: 'Setting',
  __typename: ?Typename,
  color: ?{},
  fontFamily: ?{},
  fontSize: ?{},
  fontWeight: ?{},
  spacing: ?{}
}
