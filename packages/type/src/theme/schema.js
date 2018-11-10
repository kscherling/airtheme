// @flow
import type { ThemeST } from '../flow/ThemeTypes'
import { VERSION } from '@airtheme/core'
import attribute from '../attribute'
import setting from '../setting'
import base from '../base'

/**
 *  @description Theme schema type
 */

// Included Base typename for ease.  Technically we are mixing types and interfaces
// Theme shouldn't necessarally be an interface and can be more of a type.

const Theme: ThemeST = {
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

export default Theme
