import React from 'react'
import { connect } from 'react-redux'
import { mapType } from '../mapStateToProps'

const Type = ({ type }) => type

export default connect(mapType)(Type)
