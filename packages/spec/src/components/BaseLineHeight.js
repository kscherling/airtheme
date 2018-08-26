import React from 'react'
import { connect } from 'react-redux'

const BaseLineHeight = ({ baseLineHeight }) => baseLineHeight

export default connect(({ theme: { baseLineHeight } }) => ({
  baseLineHeight
}))(BaseLineHeight)
