// @flow
import attribute from '../../attribute'
import {
  COLOR_KEY,
  FONT_FAMILY_KEY,
  FONT_SIZE_KEY,
  FONT_WEIGHT_KEY,
  SPACING_KEY
} from '@airtheme/core'
import type { SettingBaseT } from '../../flow/SettingTypes'

/**
 * @description Setting base (default) type
 */

const SettingBase: SettingBaseT = {
  __typename: 'SettingBase',
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
}

export default SettingBase
