import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseSpacing,
  mapBaseSpacingContent,
  SimpleList
} from '@airtheme/make'
import { Attribute, AttributeContent } from '../../lib/PrintTypes'
import AttributeGroup from '../../lib/AttributeGroup'

const BaseSpacingAttribute = connect(mapBaseSpacing)(({ baseSpacing }) => (
  <Attribute attribute={baseSpacing} />
))
const BaseSpacingContent = connect(mapBaseSpacingContent)(({ content }) => (
  <AttributeContent content={content} />
))

const BaseSpacing = () => (
  <AttributeGroup>
    <BaseSpacingAttribute />
    <BaseSpacingContent />
  </AttributeGroup>
)

export default BaseSpacing
