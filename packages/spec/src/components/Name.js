import React from 'react'
import { connect } from 'react-redux'
import { mapName } from '../mapStateToProps'

const Name = ({ name }) => name

export default connect(mapName)(Name)
