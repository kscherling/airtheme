import React from 'react'
import {
  Name,
  Version,
  BaseFontSize,
  BaseLineHeight,
  BaseSpacing,
  Id
} from './components/Globals'
import { Swatch } from './components/Swatch'
import { SimpleList } from '@airtheme/make'

const Mod = () => (
  <SimpleList.OneColumn>
    <SimpleList.Title>Mod</SimpleList.Title>
    <Name />
    <Version />
    <Id />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
    <Swatch />
  </SimpleList.OneColumn>
)

export default Mod
