import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch, mapSwatchContent, SimpleList } from '@airtheme/make'
import {
  printObject,
  printAttributeContent,
  Attribute,
  AttributeContent
} from '../lib/PrintTypes'

const SwatchAttribute = connect(mapSwatch)(({ swatch }) => (
  <Attribute attribute={swatch} />
))

const SwatchContent = connect(mapSwatchContent)(({ content }) => (
  <AttributeContent content={content} />
))

const Swatch = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Swatch</SimpleList.Header>
    <SwatchAttribute />
    <SwatchContent />
  </SimpleList.OneColumn>
)

export default Swatch
