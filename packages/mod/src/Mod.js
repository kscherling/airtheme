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

const Mod = () => (
  <div>
    <Name />
    <Version />
    <Id />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
    <Swatch />
  </div>
)

export default Mod
