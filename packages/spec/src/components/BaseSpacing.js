import React from 'react'
import { connect } from 'react-redux'
import { mapBaseSpacing } from '../mapStateToProps'

const BaseSpacing = ({ baseSpacing }) => baseSpacing

export default connect(mapBaseSpacing)(BaseSpacing)
