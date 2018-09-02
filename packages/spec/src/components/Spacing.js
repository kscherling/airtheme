import React from 'react'
import { connect } from 'react-redux'
import { mapSpacing, mapSpacingContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const SpacingAttribute = connect(mapSpacing)(({ spacing }) => (
  <Attribute attribute={spacing} />
))
const SpacingContent = connect(mapSpacingContent)(({ content }) => (
  <AttributeContent content={content} />
))

const Spacing = () => (
  <SimpleList.OneColumn>
    <SpacingAttribute />
    <SpacingContent />
  </SimpleList.OneColumn>
)

export default Spacing
