import React from 'react'
import { connect } from 'react-redux'
import { mapFontSize } from '../mapStateToProps'
import { printObject } from '../lib/print'

const FontSize = ({ fontSize }) => printObject('FontSize', fontSize)

export default connect(mapFontSize)(FontSize)
