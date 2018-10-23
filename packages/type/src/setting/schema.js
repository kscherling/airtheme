// @flow
import attribute from '../attribute'
import type { SettingST } from '../flow/SettingTypes'

/**
 * @description Setting schema object.
 */

const SettingSchema: SettingST = {
  __schemaname: 'Setting',
  __typename: 'Base',
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
}

export default SettingSchema
