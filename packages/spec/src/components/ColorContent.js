import React from 'react'
import { connect } from 'react-redux'
import { mapColorContent } from '../mapStateToProps'
import { printAttributeContent } from '../lib/print'

const ColorContent = ({ content }) =>
  printAttributeContent('Font Face Content', content)

export default connect(mapColorContent)(ColorContent)