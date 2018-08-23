import { _ROOT_THEME_ } from '@airtheme/airtheme-core'
import { VERSION } from '@airtheme/airtheme-core'
import attribute from '../attribute'

// theme
// The container object

export default {
  name: null,

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
  // Swatch : the user generated list of swatches

  swatch: attribute.swatch(),

  // setting
  // Setting : keyed attributes

  setting: {}
}
