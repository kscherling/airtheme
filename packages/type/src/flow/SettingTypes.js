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

/**
 * @description Setting base (default) type
 */

export type SettingBaseT = {
  __typename: 'SettingBase',
  color: ?{},
  fontFamily: ?{},
  fontSize: ?{},
  fontWeight: ?{},
  spacing: ?{}
}
