import React from 'react'
import { connect } from 'react-redux'
import { printNode } from '../lib/print'
import { Grid } from '@airtheme/make'
import {
  mapId,
  mapName,
  mapBaseFontSize,
  mapBaseSpacing,
  mapBaseLineHeight,
  mapVersion
} from '@airtheme/make'

const Id = connect(mapId)(({ id }) => printNode('id', id))
const Name = connect(mapName)(({ name }) => printNode('name', name))
const Version = connect(mapVersion)(({ version }) =>
  printNode('version', version)
)
const BaseFontSize = connect(mapBaseFontSize)(({ baseFontSize }) =>
  printNode('baseFontSize', baseFontSize)
)
const BaseLineHeight = connect(mapBaseLineHeight)(({ baseLineHeight }) =>
  printNode('baseLineHeight', baseLineHeight)
)
const BaseSpacing = connect(mapBaseSpacing)(({ baseSpacing }) =>
  printNode('baseSpacing', baseSpacing)
)

const Globals = () => (
  <Grid.OneColumn>
    <Id />
    <Name />
    <Version />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
  </Grid.OneColumn>
)

export default Globals
