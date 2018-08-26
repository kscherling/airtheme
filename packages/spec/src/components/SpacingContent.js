import React from 'react'
import { connect } from 'react-redux'
import { mapSpacingContent } from '../mapStateToProps'
import { printAttributeContent } from '../lib/print'

const SpacingContent = ({ content }) =>
  printAttributeContent('SpacingContent Content', content)

export default connect(mapSpacingContent)(SpacingContent)
