// @flow
import attribute from '../attribute'
import type { SettingBaseT } from '../flow/SettingTypes'

/**
 * @description Setting base (default) type
 */

export const Base: SettingBaseT = {
  __schemaname: 'Setting',
  __typename: 'Base',
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
}
