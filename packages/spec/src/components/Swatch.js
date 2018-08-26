import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch } from '@airtheme/make'
import { printObject } from '../lib/print'

const Swatch = ({ swatch }) => printObject('Swatch', swatch)

export default connect(mapSwatch)(Swatch)
