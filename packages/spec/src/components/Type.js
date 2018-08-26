import React from 'react'
import { connect } from 'react-redux'
import { mapType } from '../mapStateToProps'
import { printNode } from '../lib/print'

const Type = ({ type }) => printNode('type', type)

export default connect(mapType)(Type)
