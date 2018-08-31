import React from 'react'

import Globals from './components/Globals'
import Swatch from './components/Swatch'
import FontFace from './components/FontFace'
import Color from './components/Color'
import FontSize from './components/FontSize'
import FontWeight from './components/FontWeight'
import Spacing from './components/Spacing'
import { SimpleList } from '@airtheme/make'

const Spec = () => (
  <SimpleList.OneColumn>
    <SimpleList.Title>Spec</SimpleList.Title>
    <Globals />
    <Swatch />
    <FontFace />
    <Color />
    <FontSize />
    <FontWeight />
    <Spacing />
  </SimpleList.OneColumn>
)

export default Spec
