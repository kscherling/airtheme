import React from 'react'
import { connect } from 'react-redux'
import { mapFontWeight, mapFontWeightContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const FontWeightAttribute = connect(mapFontWeight)(({ fontWeight }) => (
  <Attribute attribute={fontWeight} />
))
const FontWeightContent = connect(mapFontWeightContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontWeight = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Font Weight</SimpleList.Header>
    <FontWeightAttribute />
    <FontWeightContent />
  </SimpleList.OneColumn>
)

export default FontWeight
