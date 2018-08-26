import React from 'react'
import { connect } from 'react-redux'
import { mapBaseLineHeight } from '../mapStateToProps'

const BaseLineHeight = ({ baseLineHeight }) => baseLineHeight

export default connect(mapBaseLineHeight)(BaseLineHeight)
