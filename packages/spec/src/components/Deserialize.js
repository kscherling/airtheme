import React from 'react'
import { deserializeAttribute } from '@airtheme/type'

const Deserialize = ({ attribute, render, theme = {} }) =>
  render({
    deserialized: Boolean(attribute)
      ? deserializeAttribute(attribute, theme)
      : {}
  })

export default Deserialize
