import React from 'react'
import { connect } from 'react-redux'
import { mapColor } from '../mapStateToProps'
import { printObject } from '../lib/print'

const Color = ({ color }) => printObject('Color', color)

export default connect(mapColor)(Color)
