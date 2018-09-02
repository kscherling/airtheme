import React from 'react'
import { connect } from 'react-redux'
import {
  mapId,
  mapName,
  mapType,
  mapVersion,
  updateThemeId,
  updateThemeName,
  updateThemeObject,
  updateThemeVersion,
  Grid,
  SimpleList
} from '@airtheme/make'
import { Node } from '../lib/ModifyTypes'

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

const Globals = () => (
  <SimpleList.OneColumn>
    <Id />
    <Name />
    <Version />
  </SimpleList.OneColumn>
)

export default Globals
