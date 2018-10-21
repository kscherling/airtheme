import { VERSION, uuid } from '@airtheme/core'
import attribute from '../../attribute'
import setting from '../../setting'
import base from '../../base'

import type { ThemeBaseT } from '../../flow/ThemeTypes'

const BaseType: ThemeBaseT = {
  __typename: 'base',
  base: base.base(),
  fontFace: attribute.fontFace(),
  id: uuid(),
  name: 'Basic Airtheme',
  object: 'base',
  setting: setting.base(),
  swatch: attribute.swatch(),
  version: VERSION
}

export default BaseType
