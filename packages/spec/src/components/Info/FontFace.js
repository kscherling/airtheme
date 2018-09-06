import React from 'react'
import { connect } from 'react-redux'
import { mapFontFace, mapFontFaceContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../../lib/PrintTypes'
import AttributeGroup from '../../lib/AttributeGroup'

const FontFaceAttribute = connect(mapFontFace)(({ fontFace }) => (
  <Attribute attribute={fontFace} />
))
const FontFaceContent = connect(mapFontFaceContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontFace = () => (
  <AttributeGroup>
    <FontFaceAttribute />
    <FontFaceContent />
  </AttributeGroup>
)

export default FontFace
