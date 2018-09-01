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
import { Input } from '../lib/ModifyTypes'


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
  <Input disabled label="id" value={id} onChange={updateThemeId} />
))

const Version = connect(
  mapVersion,
  { updateThemeVersion }
)(({ version, updateThemeVersion }) => (
  <Input label="version" value={version} onChange={updateThemeVersion} />
))

const BaseFontSize = connect(
  mapBaseFontSize,
  { updateBaseFontSize }
)(({ baseFontSize, updateBaseFontSize }) => (
  <Input
    label="baseFontSize"
    value={baseFontSize}
    onChange={updateBaseFontSize}
  />
))

const BaseLineHeight = connect(
  mapBaseLineHeight,
  { updateBaseLineHeight }
)(({ baseLineHeight, updateBaseLineHeight }) => (
  <Input
    label="baseLineHeight"
    value={baseLineHeight}
    onChange={updateBaseLineHeight}
  />
))

const BaseSpacing = connect(
  mapBaseSpacing,
  { updateBaseSpacing }
)(({ baseSpacing, updateBaseSpacing }) => (
  <Input
    label="baseLineHeight"
    value={baseSpacing}
    onChange={updateBaseSpacing}
  />
))

const Globals = () => {
  <Name />
}


export default Globals
