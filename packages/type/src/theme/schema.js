import { _ROOT_THEME_ } from '@airtheme/core'
import { VERSION, uuid } from '@airtheme/core'
import attribute from '../attribute'
import setting from '../setting'
import base from '../base'

// theme
// The container object

export default {
  // name
  // Friendly name of the theme

  name: null,

  // id
  // you know, the id

  id: uuid(),

  // object
  // string : The name of the unit.

  object: _ROOT_THEME_,

  // version
  // string : the version of the airthemek

  version: VERSION,

  // base
  // Base : Keyed object of base attribute types

  base: base.base(),

  // swatch
  // Swatch : Swatch attribute object

  swatch: attribute.swatch(),

  // fontFace
  // FontFace : fontFace attribute object

  fontFace: attribute.fontFace(),

  // setting
  // Setting : Keyed object of attribute types

  setting: setting.base()
}
