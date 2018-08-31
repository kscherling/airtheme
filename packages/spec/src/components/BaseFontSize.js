import React from 'react'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '@airtheme/make'
import { printNode } from '../lib/PrintTypes'

const BaseFontSize = ({ baseFontSize }) =>
  printNode('baseFontSize', baseFontSize)

export default connect(mapBaseFontSize)(BaseFontSize)
