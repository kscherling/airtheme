import React from 'react'
import { connect } from 'react-redux'
import { mapFontFamily, mapFontFamilyContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const FontFamilyAttribute = connect(mapFontFamily)(({ fontFamily }) => (
  <Attribute attribute={fontFamily} />
))
const FontFamilyContent = connect(mapFontFamilyContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontFamily = () => (
  <SimpleList.OneColumn>
    <FontFamilyAttribute />
    <FontFamilyContent />
  </SimpleList.OneColumn>
)

export default FontFamily
