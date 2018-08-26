import React from 'react'
import { connect } from 'react-redux'
import { mapBaseSpacing } from '@airtheme/make'
import { printNode } from '../lib/print'

const BaseSpacing = ({ baseSpacing }) => printNode('baseSpacing', baseSpacing)

export default connect(mapBaseSpacing)(BaseSpacing)
