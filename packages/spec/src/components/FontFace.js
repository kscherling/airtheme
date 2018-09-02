import React from 'react'
import { connect } from 'react-redux'
import { mapFontFace, mapFontFaceContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const FontFaceAttribute = connect(mapFontFace)(({ fontFace }) => (
  <Attribute attribute={fontFace} />
))
const FontFaceContent = connect(mapFontFaceContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontFace = () => (
  <SimpleList.OneColumn>
    <FontFaceAttribute />
    <FontFaceContent />
  </SimpleList.OneColumn>
)

export default FontFace
