import React from 'react'
import Globals from './components/Globals'
import Swatch from './components/Swatch'
import Color from './components/Color'
import FontSize from './components/FontSize'
import { SimpleList } from '@airtheme/make'

const Mod = () => (
  <SimpleList.OneColumn>
    <SimpleList.Title>Mod</SimpleList.Title>
    <Globals />
    <Swatch />
    <Color />
    <FontSize />
  </SimpleList.OneColumn>
)

export default Mod
