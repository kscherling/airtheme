import React from 'react'
import { connect } from 'react-redux'
import { mapFontFamily, mapFontFamilyContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../components/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

const FontFamilyAttribute = connect(mapFontFamily)(({ fontFamily }) => (
  <Attribute attribute={fontFamily} />
))
const FontFamilyContent = connect(mapFontFamilyContent)(({ content }) => (
  <AttributeContent content={content} />
))

const FontFamily = () => (
  <AttributeGroup>
    <FontFamilyAttribute />
    <FontFamilyContent />
  </AttributeGroup>
)

export default FontFamily
