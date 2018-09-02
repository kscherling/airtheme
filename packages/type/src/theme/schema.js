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

  // baseFontSize
  // string : the reference of the unit

  baseFontSize: 16,

  // baseLineHeight
  // string : the reference of the unit

  baseLineHeight: 1.15,

  // baseSpacing
  // string : the reference of the unit

  baseSpacing: 16,

  // object
  // string : The name of the unit.

  object: _ROOT_THEME_,

  // version
  // string : the version of the airthemek

  version: VERSION,

  // swatch
  // Swatch : Swatch attribute object
  swatch: attribute.swatch(),

  // fontFace
  // FontFace : fontFace attribute object
  fontFace: attribute.fontFace(),

  // root
  // Root : Keyed object of root attribute types

  base: base.base(),

  // setting
  // Setting : Keyed object of attribute types

  setting: setting.base()
}
