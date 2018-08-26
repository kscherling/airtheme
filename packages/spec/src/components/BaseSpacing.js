import React from 'react'
import { connect } from 'react-redux'

const BaseSpacing = ({ baseSpacing }) => baseSpacing

export default connect(({ theme: { baseSpacing } }) => ({
  baseSpacing
}))(BaseSpacing)
