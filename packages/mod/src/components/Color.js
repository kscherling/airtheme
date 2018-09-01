import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapColor,
  mapColorContent,
  updateColorView,
  addColor,
  removeColor,
  updateColor,
  SimpleList
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

export const ColorAttribute = connect(
  mapColor,
  { updateColorView }
)(({ color: { view, viewable }, updateColorView }) => (
  <Attribute view={view} viewable={viewable} updateView={updateColorView} />
))

const ColorContent = connect(
  mapColorContent,
  { addColor, removeColor, updateColor }
)(({ content, addColor, removeColor, updateColor }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeColor}
      update={updateColor}
    />
    <AddUnit nextOrdinal={content.length + 1} add={addColor} />
  </Fragment>
))

export const Color = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Color</SimpleList.Header>
    <ColorAttribute />
    <ColorContent />
  </SimpleList.OneColumn>
)
