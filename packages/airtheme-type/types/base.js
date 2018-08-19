// air-base
// type for a theme setting base group of units

const schema = {
  // content
  // Object : key/val store for settings. User selected.

  content: {},

  // display
  // The unit the content items are displayed. User selected.

  display: null,

  // type
  // The name of the type. The same as the 'class'

  type: 'base',

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

const createType = ({
  type = schema.type,
  display = schema.display,
  unit = schema.unit,
  options = schema.options,
  reference = schema.reference
} = {}) =>
  Object.assign({}, schema, { type, display, unit, options, reference })

export default createType
