import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeightContent } from '@airtheme/make'
import { printAttributeContent } from '../lib/PrintTypes'

const FontWeightContent = ({ content }) =>
  printAttributeContent('Font Weight Content', content)

export default connect(mapFontWeightContent)(FontWeightContent)
