import { _ROOT_THEME_ } from '@airtheme/core'
import { VERSION } from '@airtheme/core'
import attribute from '../attribute'
import setting from '../setting'

// theme
// The container object

export default {
  // name
  // Friendly name of the theme

  name: null,

  // id
  // you know, the id

  id: null,

  // baseFontSize
  // string : the key of the unit

  baseFontSize: 16,

  // baseLineHeight
  // string : the key of the unit

  baseLineHeight: 1.15,

  // baseSpacing
  // string : the key of the unit

  baseSpacing: 16,

  // type
  // string : The name of the unit.

  type: _ROOT_THEME_,

  // version
  // string : the version of the airthemek

  version: VERSION,

  // swatch
  // Swatch : Swatch attribute type
  swatch: attribute.swatch(),

  // fontFace
  // FontFace : fontFace attribute type
  fontFace: attribute.fontFace(),

  // setting
  // Setting : Keyed object of attribute types

  setting: setting.base()
}
