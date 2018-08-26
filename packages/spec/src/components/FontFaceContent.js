import React from 'react'
import { connect } from 'react-redux'
import { mapFontFaceContent } from '../mapStateToProps'
import { printAttributeContent } from '../lib/print'

const FontFaceContent = ({ content }) =>
  printAttributeContent('Font Face Content', content)

export default connect(mapFontFaceContent)(FontFaceContent)
