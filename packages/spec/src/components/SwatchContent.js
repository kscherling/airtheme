import React from 'react'
import { connect } from 'react-redux'
import { mapSwatchContent } from '@airtheme/make'
import { printAttributeContent } from '../lib/print'

const SwatchContent = ({ content }) =>
  printAttributeContent('Swatch Content', content)

export default connect(mapSwatchContent)(SwatchContent)
