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
import { Input } from '../lib/basicControls'

export const Name = connect(
  mapName,
  { updateThemeName }
)(({ name, updateThemeName }) => (
  <Input label="name" value={name} onChange={updateThemeName} />
))

export const Id = connect(
  mapId,
  { updateThemeId }
)(({ id, updateThemeId }) => (
  <Input disabled label="id" value={id} onChange={updateThemeId} />
))

export const Version = connect(
  mapVersion,
  { updateThemeVersion }
)(({ version, updateThemeVersion }) => (
  <Input label="version" value={version} onChange={updateThemeVersion} />
))

export const BaseFontSize = connect(
  mapBaseFontSize,
  { updateBaseFontSize }
)(({ baseFontSize, updateBaseFontSize }) => (
  <Input
    label="baseFontSize"
    value={baseFontSize}
    onChange={updateBaseFontSize}
  />
))

export const BaseLineHeight = connect(
  mapBaseLineHeight,
  { updateBaseLineHeight }
)(({ baseLineHeight, updateBaseLineHeight }) => (
  <Input
    label="baseLineHeight"
    value={baseLineHeight}
    onChange={updateBaseLineHeight}
  />
))

export const BaseSpacing = connect(
  mapBaseSpacing,
  { updateBaseSpacing }
)(({ baseSpacing, updateBaseSpacing }) => (
  <Input
    label="baseLineHeight"
    value={baseSpacing}
    onChange={updateBaseSpacing}
  />
))
