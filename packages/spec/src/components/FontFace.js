import React from 'react'
import { connect } from 'react-redux'
import { mapFontFace } from '@airtheme/make'
import { printObject } from '../lib/print'

const FontFace = ({ fontFace }) => printObject('Font Face', fontFace)

export default connect(mapFontFace)(FontFace)
