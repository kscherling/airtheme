import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseLineHeight,
  mapBaseSpacing,
  mapId,
  mapName,
  mapType,
  mapVersion,
  updateBaseFontSize,
  updateBaseLineHeight,
  updateBaseSpacing,
  updateThemeId,
  updateThemeName,
  updateThemeType,
  updateThemeVersion
} from '@airtheme/make'
import { Node } from '../lib/ModifyTypes'
import { Grid, SimpleList } from '@airtheme/make'

const Name = connect(
  mapName,
  { updateThemeName }
)(({ name, updateThemeName }) => (
  <SimpleList.TwoColumns>
    <Node label="name" value={name} onChange={updateThemeName} />
  </SimpleList.TwoColumns>
))

const Id = connect(
  mapId,
  { updateThemeId }
)(({ id, updateThemeId }) => (
  <SimpleList.TwoColumns>
    <Node disabled label="id" value={id} onChange={updateThemeId} />
  </SimpleList.TwoColumns>
))

const Version = connect(
  mapVersion,
  { updateThemeVersion }
)(({ version, updateThemeVersion }) => (
  <SimpleList.TwoColumns>
    <Node label="version" value={version} onChange={updateThemeVersion} />
  </SimpleList.TwoColumns>
))

const BaseFontSize = connect(
  mapBaseFontSize,
  { updateBaseFontSize }
)(({ baseFontSize, updateBaseFontSize }) => (
  <SimpleList.TwoColumns>
    <Node
      label="baseFontSize"
      value={baseFontSize}
      onChange={updateBaseFontSize}
    />
  </SimpleList.TwoColumns>
))

const BaseLineHeight = connect(
  mapBaseLineHeight,
  { updateBaseLineHeight }
)(({ baseLineHeight, updateBaseLineHeight }) => (
  <SimpleList.TwoColumns>
    <Node
      label="baseLineHeight"
      value={baseLineHeight}
      onChange={updateBaseLineHeight}
    />
  </SimpleList.TwoColumns>
))

const BaseSpacing = connect(
  mapBaseSpacing,
  { updateBaseSpacing }
)(({ baseSpacing, updateBaseSpacing }) => (
  <SimpleList.TwoColumns>
    <Node
      label="baseLineHeight"
      value={baseSpacing}
      onChange={updateBaseSpacing}
    />
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
