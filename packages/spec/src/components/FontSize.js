import React from 'react'
import { connect } from 'react-redux'
import { mapFontSize } from '@airtheme/make'
import { printObject } from '../lib/print'

const FontSize = ({ fontSize }) => printObject('FontSize', fontSize)

export default connect(mapFontSize)(FontSize)
