import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeight, mapFontWeightContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../../lib/PrintTypes'
import AttributeGroup from '../../lib/AttributeGroup'

const FontWeightAttribute = connect(mapFontWeight)(({ fontWeight }) => (
  <Attribute attribute={fontWeight} />
))
const FontWeightContent = connect(mapFontWeightContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontWeight = () => (
  <AttributeGroup>
    <FontWeightAttribute />
    <FontWeightContent />
  </AttributeGroup>
)

export default FontWeight
