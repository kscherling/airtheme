import React from 'react'
import { connect } from 'react-redux'
import { mapFontSizeContent } from '../mapStateToProps'
import { printAttributeContent } from '../lib/print'

const FontSizeContent = ({ content }) =>
  printAttributeContent('Font Size Content', content)

export default connect(mapFontSizeContent)(FontSizeContent)
