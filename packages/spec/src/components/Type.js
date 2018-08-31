import React from 'react'
import { connect } from 'react-redux'
import { mapType } from '@airtheme/make'
import { printNode } from '../lib/PrintTypes'

const Type = ({ type }) => printNode('type', type)

export default connect(mapType)(Type)
