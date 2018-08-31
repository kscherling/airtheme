import React from 'react'
import { connect } from 'react-redux'
import { mapSpacingContent } from '@airtheme/make'
import { printAttributeContent } from '../lib/PrintTypes'

const SpacingContent = ({ content }) =>
  printAttributeContent('SpacingContent Content', content)

export default connect(mapSpacingContent)(SpacingContent)
