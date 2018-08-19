import { _ROOT_ } from '../../constants/themeAttributes'

// Attribute
// type for a theme attribute, has many units

export default {
  // content
  // Object : key/val store for settings. User selected.

  content: {},

  // display
  // The unit the content items are displayed. User selected.

  display: null,

  // displays
  // Array : Units this type can serialize to.

  displays: [],

  // reference
  // A string namespace global reference

  reference: null,

  // type
  // The name of the type. The same as the 'class'

  type: _ROOT_,

  // unit
  // The unit the content items are stored. Static.

  unit: null
}
