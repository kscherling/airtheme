import React from 'react'
import { connect } from 'react-redux'
import { mapFontFace, mapFontFaceContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../components/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

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
