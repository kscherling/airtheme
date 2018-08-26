import React from 'react'
import { connect } from 'react-redux'
import { mapVersion } from '../mapStateToProps'

const Version = ({ version }) => version

export default connect(mapVersion)(Version)
