// Attribute
// type for a theme attribute, has many units

export default {
  // content
  // Object : key/val store for settings. User selected.

  content: {},

  // display
  // The unit the content items are displayed. User selected.

  display: null,

  // type
  // The name of the type. The same as the 'class'

  type: 'attribute',

  // options
  // Array : Units this type can serialize to.

  options: [],

  // reference
  // A string namespace global reference

  reference: null,

  // unit
  // The unit the content items are stored. Static.

  unit: null
}
