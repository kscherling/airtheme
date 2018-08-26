import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch } from '../mapStateToProps'

const Swatch = ({ swatch: { view, viewable, type, unit } }) => (
  <div>
    <strong>Swatch</strong>
    <br />
    {view}
    <br />
    {viewable}
    <br />
    {type}
    <br />
    {unit}
  </div>
)

export default connect(mapSwatch)(Swatch)
