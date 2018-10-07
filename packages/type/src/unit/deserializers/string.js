const deserializeString = (
  { value: unitVal, name: unitName } = {},
  _attribute,
  _theme
) => {
  return { [unitName]: `${unitVal}` }
}

export default deserializeString
