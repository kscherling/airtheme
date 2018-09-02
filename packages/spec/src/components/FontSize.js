import React from 'react'
import { connect } from 'react-redux'
import { mapFontSize, mapFontSizeContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const FontSizeAttribute = connect(mapFontSize)(({ fontSize }) => (
  <Attribute attribute={fontSize} />
))
const FontSizeContent = connect(mapFontSizeContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontSize = () => (
  <SimpleList.OneColumn>
    <FontSizeAttribute />
    <FontSizeContent />
  </SimpleList.OneColumn>
)

export default FontSize
