import React from 'react'
import { connect } from 'react-redux'
import { mapBaseLineHeight } from '@airtheme/make'
import { printNode } from '../lib/print'

const BaseLineHeight = ({ baseLineHeight }) =>
  printNode('baseLineHeight', baseLineHeight)

export default connect(mapBaseLineHeight)(BaseLineHeight)
