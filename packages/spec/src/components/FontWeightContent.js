import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeightContent } from '../mapStateToProps'
import { printAttributeContent } from '../lib/print'

const FontWeightContent = ({ content }) =>
  printAttributeContent('Font Weight Content', content)

export default connect(mapFontWeightContent)(FontWeightContent)
