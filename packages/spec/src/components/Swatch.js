import React from 'react'
import { connect } from 'react-redux'
import { mapSwatch, mapSwatchContent, SimpleList } from '@airtheme/make'
import { printObject, printAttributeContent, Attribute } from '../lib/print'

const Swatch = connect(mapSwatch)(({ swatch }) => (
  <Attribute name="Swatch" attribute={swatch} />
))

const SwatchContent = connect(mapSwatchContent)(({ content }) =>
  printAttributeContent('Swatch Content', content)
)

export default Swatch
