import deserializeUnit from '../unit/deserialize'
/*
Accepts an attribute object and theme object
Returns object of deserialzied values
must pass attribute and theme object for reference

fontSize: {
  view: "factor",
  viewable: [ "factor", "px", "rem" ],
  reference: "baseFontSize",
  object: "fontSize",
  unit: "factor"
  content: [
    { name: "xs", ordinal: 1, object: "factor", value: "0.8" },
    { name: "sm", ordinal: 2, object: "factor", value: "0.9" },
    { name: "md", ordinal: 3, object: "factor", value: "1" },
    { name: "lg", ordinal: 4, object: "factor", value: "1.1" },
    { name: "xl", ordinal: 5, object: "factor", value: "1.2" },
    { name: "xxl", ordinal: 6, object: "factor", value: "1.3" }
  ],
},

{
  xs: '0.8rem',
  sm: '0.9rem',
  md: '1rem',
  ...
}
*/

const deserialize = (attribute, theme) =>
  attribute.content.reduce(
    (acc, unit) => ({
      ...acc,
      ...deserializeUnit(unit, attribute, theme)
    }),
    {}
  )

export default deserialize
