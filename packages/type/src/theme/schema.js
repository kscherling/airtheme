// @flow
import type { ThemeST } from '../flow/ThemeTypes'
import { VERSION } from '@airtheme/core'
import attribute from '../attribute'
import setting from '../setting'
import base from '../base'

/**
 *  @description Theme schema type
 */

const Theme: ThemeST = {
  __schemaname: 'Theme',
  __typename: '',
  base: base.base(),
  fontFace: attribute.fontFace(),
  id: '',
  name: '',
  setting: setting.base(),
  swatch: attribute.swatch(),
  version: VERSION
}

export default Theme
