import React from 'react'
import { connect } from 'react-redux'
import { mapVersion } from '../mapStateToProps'
import { printNode } from '../lib/print'

const Version = ({ version }) => printNode('version', version)

export default connect(mapVersion)(Version)
