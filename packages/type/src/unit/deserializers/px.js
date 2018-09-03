const deserializePx = (
  { value: unitVal, name: unitName, object: unitObject } = {},
  _attribute,
  _theme
) => {
  return { [unitName]: `${unitVal}${unitObject}` }
}

export default deserializePx
