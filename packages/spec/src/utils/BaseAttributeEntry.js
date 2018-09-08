import React from 'react'
import { deserializeAttribute } from '@airtheme/type'

const firstVal = obj => Object.values(obj)[0]

const BaseAttributeEntry = ({
  attribute = {},
  render = () => null,
  renderLoading = () => null
}) => {
  const deserialized = deserializeAttribute(attribute)
  const value = deserialized && firstVal(deserialized)

  return value ? render({ value }) : renderLoading()
}

export default BaseAttributeEntry
