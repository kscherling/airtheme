import React from 'react'
import Globals from './components/Globals'
import Swatch from './components/Swatch'
import FontFace from './components/FontFace'
import FontFamily from './components/FontFamily'
import FontSize from './components/FontSize'
import FontWeight from './components/FontWeight'
import Color from './components/Color'
import Spacing from './components/Spacing'
import BaseFontSize from './components/BaseFontSize'
import BaseLineHeight from './components/BaseLineHeight'
import BaseSpacing from './components/BaseSpacing'
import { SimpleList } from '@airtheme/make'

const Mod = () => (
  <SimpleList.OneColumn>
    <SimpleList.Title>Mod</SimpleList.Title>
    <Globals />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
    <FontFace />
    <Swatch />
    <FontFamily />
    <FontSize />
    <FontWeight />
    <Color />
    <Spacing />
  </SimpleList.OneColumn>
)

export default Mod
