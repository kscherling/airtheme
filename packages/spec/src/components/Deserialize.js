import React from 'react'
import { deserializeAttribute } from '@airtheme/type'

const Deserialize = ({ attribute, unit = {}, render, theme = {} }) =>
  render({
    deserialized: Boolean(attribute)
      ? deserializeAttribute({ ...attribute, content: [unit] }, theme)
      : {}
  })

export default Deserialize
