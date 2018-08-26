import React from 'react'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '../mapStateToProps'

const BaseFontSize = ({ baseFontSize }) => baseFontSize

export default connect(mapBaseFontSize)(BaseFontSize)
