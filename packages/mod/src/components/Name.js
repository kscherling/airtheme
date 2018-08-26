import React from 'react'
import { connect } from 'react-redux'
import { mapName, updateThemeName } from '@airtheme/make'

const Name = ({ name, updateThemeName }) => {
  return (
    <input
      type="text"
      value={name}
      onChange={e => updateThemeName(e.target.value)}
    />
  )
}

export default connect(
  mapName,
  { updateThemeName }
)(Name)
