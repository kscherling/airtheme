import React from 'react'
import { connect } from 'react-redux'
import { mapColor } from '@airtheme/make'
import { printObject } from '../lib/PrintTypes'

const Color = ({ color }) => printObject('Color', color)

export default connect(mapColor)(Color)
