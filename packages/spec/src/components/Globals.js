import React from 'react'
import { connect } from 'react-redux'
import { Node } from '../lib/print'
import { Grid, SimpleList } from '@airtheme/make'
import {
  mapId,
  mapName,
  mapBaseFontSize,
  mapBaseSpacing,
  mapBaseLineHeight,
  mapVersion
} from '@airtheme/make'

const Id = connect(mapId)(({ id }) => (
  <SimpleList.TwoColumns>
    <Node name="id" val={id} />
  </SimpleList.TwoColumns>
))
const Name = connect(mapName)(({ name }) => (
  <SimpleList.TwoColumns>
    <Node name="name" val={name} />
  </SimpleList.TwoColumns>
))
const Version = connect(mapVersion)(({ version }) => (
  <SimpleList.TwoColumns>
    <Node name="version" val={version} />
  </SimpleList.TwoColumns>
))
const BaseFontSize = connect(mapBaseFontSize)(({ baseFontSize }) => (
  <SimpleList.TwoColumns>
    <Node name="baseFontSize" val={baseFontSize} />
  </SimpleList.TwoColumns>
))

const BaseLineHeight = connect(mapBaseLineHeight)(({ baseLineHeight }) => (
  <SimpleList.TwoColumns>
    <Node name="baseLineHeight" val={baseLineHeight} />
  </SimpleList.TwoColumns>
))

const BaseSpacing = connect(mapBaseSpacing)(({ baseSpacing }) => (
  <SimpleList.TwoColumns>
    <Node name="baseSpacing" val={baseSpacing} />
  </SimpleList.TwoColumns>
))

const Globals = () => (
  <SimpleList>
    <SimpleList.Header>Global</SimpleList.Header>
    <Id />
    <Name />
    <Version />
    <BaseFontSize />
    <BaseLineHeight />
    <BaseSpacing />
  </SimpleList>
)

export default Globals
