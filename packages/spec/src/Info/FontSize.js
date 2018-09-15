import React from 'react'
import { connect } from 'react-redux'
import { mapFontSize, mapFontSizeContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../components/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

const FontSizeAttribute = connect(mapFontSize)(({ fontSize }) => (
  <Attribute attribute={fontSize} />
))
const FontSizeContent = connect(mapFontSizeContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontSize = () => (
  <AttributeGroup>
    <FontSizeAttribute />
    <FontSizeContent />
  </AttributeGroup>
)

export default FontSize
