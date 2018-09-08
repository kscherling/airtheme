import React from 'react'
import { deserializeAttribute } from '@airtheme/type'

const BaseAttributeEntry = ({
  attribute = {},
  render = () => null,
  renderLoading = () => null
}) => {
  console.log(attribute)

  const content = false
  return content ? render() : renderLoading()
}

export default BaseAttributeEntry
