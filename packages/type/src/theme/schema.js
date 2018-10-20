// @flow
import { _ROOT_THEME_ } from '@airtheme/core'
import { VERSION, uuid } from '@airtheme/core'
import attribute from '../attribute'
import setting from '../setting'
import base from '../base'

/**
 *  Schema for theme object.
 */

export type Schema = {
  base: any,
  fontFace: any,
  id: string,
  name: string,
  object: string,
  setting: any,
  swatch: any,
  version: string
}

const schema: Schema = {
  name: 'Default',
  id: uuid(),
  object: _ROOT_THEME_,
  version: VERSION,
  base: base.base(),
  swatch: attribute.swatch(),
  fontFace: attribute.fontFace(),
  setting: setting.base()
}

export default schema
