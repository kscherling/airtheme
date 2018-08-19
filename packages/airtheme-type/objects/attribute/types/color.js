import { COLOR } from '../../../constants/attributeTypes'
import { FACTOR, PX, REM } from '../../../constants/unitTypes'

// Attribute
// type for a theme attribute, has many units

export default {
  // display
  // The unit the content items are displayed. User selected.

  display: 'reference',

  // diplays
  // Array : Units this type can serialize to.

  displays: ['reference', 'hex', 'hexa', 'rgb', 'rgba'],

  // reference
  // A string namespace global reference

  reference: 'swatch',

  // type
  // The name of the type. The same as the 'class'

  type: COLOR,

  // unit
  // The unit the content items are stored. Static.

  unit: 'reference'
}
