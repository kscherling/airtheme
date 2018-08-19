import { COLOR, SWATCH } from '../../../constants/attributeTypes'
import { REFERENCE, HEX, HEXA, RGB, RGBA } from '../../../constants/unitTypes'

// Attribute
// type for a theme attribute, has many units

export default {
  // display
  // The unit the content items are displayed. User selected.

  display: REFERENCE,

  // diplays
  // Array : Units this type can serialize to.

  displays: [REFERENCE, HEX, HEXA, RGB, RGBA],

  // reference
  // A string namespace global reference

  reference: SWATCH,

  // type
  // The name of the type. The same as the 'class'

  type: COLOR,

  // unit
  // The unit the content items are stored. Static.

  unit: REFERENCE
}
