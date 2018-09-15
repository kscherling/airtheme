import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeight, mapFontWeightContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../lib/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

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
