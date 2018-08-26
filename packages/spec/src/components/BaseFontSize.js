import React from 'react'
import { connect } from 'react-redux'

const BaseFontSize = ({ baseFontSize }) => baseFontSize

export default connect(({ theme: { baseFontSize } }) => ({
  baseFontSize
}))(BaseFontSize)
