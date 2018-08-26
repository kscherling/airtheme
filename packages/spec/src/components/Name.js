import React from 'react'
import { connect } from 'react-redux'
import { mapName } from '../mapStateToProps'
import { printNode } from '../lib/print'

const Name = ({ name }) => printNode('name', name)

export default connect(mapName)(Name)
