import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeight } from '@airtheme/make'
import { printObject } from '../lib/PrintTypes'

const FontWeight = ({ fontWeight }) => printObject('FontWeight', fontWeight)

export default connect(mapFontWeight)(FontWeight)
