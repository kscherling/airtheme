import deserializeUnit from '../unit/deserializer'
/*
Accepts an attribute __typename and theme __typename
Returns __typename of deserialzied values
must pass attribute and theme __typename for reference

fontSize: {
  view: "factor",
  viewable: [ "factor", "px", "rem" ],
  reference: "baseFontSize",
  __typename: "fontSize",
  unit: "factor"
  content: [
    { name: "xs", ordinal: 1, __typename: "factor", value: "0.8" },
    { name: "sm", ordinal: 2, __typename: "factor", value: "0.9" },
    { name: "md", ordinal: 3, __typename: "factor", value: "1" },
    { name: "lg", ordinal: 4, __typename: "factor", value: "1.1" },
    { name: "xl", ordinal: 5, __typename: "factor", value: "1.2" },
    { name: "xxl", ordinal: 6, __typename: "factor", value: "1.3" }
  ],
},

{
  xs: '0.8rem',
  sm: '0.9rem',
  md: '1rem',
  ...
}
*/

const isEmpty = ({ content }) =>
  Array.isArray(content) ? !Boolean(content.length) : !Boolean(content)

const validTypes = ({ content, unit } = {}) =>
  Array.isArray(content)
    ? content.length && unit === content[0].__typename
    : content && unit === content.__typename

const deserialize = (attribute, theme) => {
  if (isEmpty(attribute)) {
    console.warn('Content is empty')
    return
  }

  if (!validTypes(attribute)) {
    console.warn('Attempting to deserialize a type mismatch')
    return
  }

  if (Array.isArray(attribute.content)) {
    return attribute.content.reduce(
      (acc, unit) => ({
        ...acc,
        ...deserializeUnit(unit, attribute, theme)
      }),
      {}
    )
  }

  return deserializeUnit(attribute.content, attribute, theme)
}

export default deserialize
