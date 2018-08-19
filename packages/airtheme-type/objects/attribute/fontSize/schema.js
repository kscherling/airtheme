import { FACTOR, PX, REM } from '../../../constants/unitTypes'
import { BASE_FONT_SIZE_KEY } from '../../../constants/themeKeys'

// Attribute
// type for a theme attribute, has many units

export default {
  // display
  // The unit the content items are displayed. User selected.

  display: 'factor',

  // diplays
  // Array : Units this type can serialize to.

  displays: [FACTOR, PX, REM],

  // reference
  // A string namespace global reference

  reference: BASE_FONT_SIZE_KEY,

  // type
  // The name of the type. The same as the 'class'

  type: 'fontSize',

  // unit
  // The unit the content items are stored. Static.

  unit: FACTOR
}
