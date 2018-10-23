import downcase from '../../utils/downcase'

const deserializePx = (
  { value: unitVal, name: unitName, __typename } = {},
  _attribute,
  _theme
) => {
  return { [unitName]: `${unitVal}${downcase(__typename)}` }
}

export default deserializePx
