import React from 'react'
import Globals from './components/Globals'
import Swatch from './components/Swatch'
import Color from './components/Color'
import FontFace from './components/FontFace'
import FontSize from './components/FontSize'
import FontWeight from './components/FontWeight'
import Spacing from './components/Spacing'
import { SimpleList } from '@airtheme/make'

const Mod = () => (
  <SimpleList.OneColumn>
    <SimpleList.Title>Mod</SimpleList.Title>
    <Globals />
    <Swatch />
    <FontFace />
    <Color />
    <FontSize />
    <FontWeight />
    <Spacing />
  </SimpleList.OneColumn>
)

export default Mod
