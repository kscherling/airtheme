import React from 'react'
import { connect } from 'react-redux'
import { mapSpacing, mapSpacingContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../lib/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

const SpacingAttribute = connect(mapSpacing)(({ spacing }) => (
  <Attribute attribute={spacing} />
))
const SpacingContent = connect(mapSpacingContent)(({ content }) => (
  <AttributeContent content={content} />
))

const Spacing = () => (
  <AttributeGroup>
    <SpacingAttribute />
    <SpacingContent />
  </AttributeGroup>
)

export default Spacing
