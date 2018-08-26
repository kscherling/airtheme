import React from 'react'
import { connect } from 'react-redux'
import { mapFontFace } from '../mapStateToProps'

const FontFace = ({ fontFace: { view, viewable, type, unit } }) => (
  <div>
    <strong>Font Face</strong>
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

export default connect(mapFontFace)(FontFace)
