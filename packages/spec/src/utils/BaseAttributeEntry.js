import React from 'react'
import { mapTheme } from '@airtheme/make'
import { deserializeAttribute } from '@airtheme/type'
import { connect } from 'react-redux'

// NOTE: This also may not be necessary

const firstVal = obj => Object.values(obj)[0]
const isEmpty = obj => Boolean(Object.keys(obj).length)
const BaseAttributeEntry = ({
  attribute = {},
  theme = {},
  render = () => null,
  renderLoading = () => null
}) => {
  const deserialized = deserializeAttribute(attribute, theme)

  return isEmpty(attribute)
    ? render({ ...attribute, deserialized })
    : renderLoading()
}

// TODO: Hmmm, this may be perf issue...
export default connect(mapTheme)(BaseAttributeEntry)
