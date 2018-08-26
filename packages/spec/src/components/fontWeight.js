import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeight } from '../mapStateToProps'
import { printObject } from '../lib/print'

const FontWeight = ({ fontWeight }) => printObject('FontWeight', fontWeight)

export default connect(mapFontWeight)(FontWeight)
