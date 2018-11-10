// @flow
import { VERSION, uuid } from '@airtheme/core'
import attribute from '../attribute'
import setting from '../setting'
import base from '../base'
import type { ThemeBaseT } from '../flow/ThemeTypes'

/**
 * @description Theme base (default) type
 */

export const Base: ThemeBaseT = {
  __schemaname: 'Theme',
  __typename: 'Base',
  base: base.base(),
  fontFace: attribute.fontFace(),
  id: '',
  name: '',
  setting: setting.base(),
  swatch: attribute.swatch(),
  version: VERSION
}
