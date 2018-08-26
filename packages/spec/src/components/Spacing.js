import React from 'react'
import { connect } from 'react-redux'
import { mapSpacing } from '@airtheme/make'
import { printObject } from '../lib/print'

const Spacing = ({ spacing }) => printObject('Spacing', spacing)

export default connect(mapSpacing)(Spacing)
