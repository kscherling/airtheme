import { _ROOT_ATTRIBUTE_ } from '@airtheme/core'

// Attribute
// object for a theme attribute, has many units

export default {
  // content
  // Object : reference/val store for settings. User selected.

  content: [],

  // view
  // The unit the content items are displayed. User selected.

  view: null,

  // viewable
  // Array : Units this object can serialize to.

  viewable: [],

  // reference
  // A string namespace global reference

  reference: null,

  // object
  // The name of the object. The same as the 'class'

  object: _ROOT_ATTRIBUTE_,

  // unit
  // The unit the content items are stored. Static.

  unit: null
}
