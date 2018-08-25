import { _ROOT_ATTRIBUTE_ } from '@airtheme/core'

// Attribute
// type for a theme attribute, has many units

export default {
  // content
  // Object : key/val store for settings. User selected.

  content: [],

  // view
  // The unit the content items are displayed. User selected.

  view: null,

  // viewable
  // Array : Units this type can serialize to.

  viewable: [],

  // reference
  // A string namespace global reference

  reference: null,

  // type
  // The name of the type. The same as the 'class'

  type: _ROOT_ATTRIBUTE_,

  // unit
  // The unit the content items are stored. Static.

  unit: null
}
