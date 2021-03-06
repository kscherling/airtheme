import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch, mapSwatchContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../components/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

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
