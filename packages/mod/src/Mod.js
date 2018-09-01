import React from 'react'
import Globals from './components/Globals'
import { Swatch } from './components/Swatch'
import { SimpleList } from '@airtheme/make'

const Mod = () => (
  <SimpleList.OneColumn>
    <SimpleList.Title>Mod</SimpleList.Title>
    <Globals />
    <Swatch />
  </SimpleList.OneColumn>
)

export default Mod
