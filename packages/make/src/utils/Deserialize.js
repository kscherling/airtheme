import React from 'react'
import { deserializeAttribute } from '@airtheme/type'

const Deserialize = ({ attribute, unit = {}, render, schema = {} }) => {
  return render({
    deserialized: Boolean(attribute)
      ? deserializeAttribute({ ...attribute, content: [unit] }, schema)
      : {}
  })
}

export default Deserialize
