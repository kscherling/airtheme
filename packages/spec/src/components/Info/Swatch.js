import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch, mapSwatchContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../../lib/PrintTypes'
import AttributeGroup from '../../lib/AttributeGroup'

const SwatchAttribute = connect(mapSwatch)(({ swatch }) => (
  <Attribute attribute={swatch} />
))

const SwatchContent = connect(mapSwatchContent)(({ content }) => (
  <AttributeContent content={content} />
))

const Swatch = () => (
  <AttributeGroup>
    <SwatchAttribute />
    <SwatchContent />
  </AttributeGroup>
)

export default Swatch
