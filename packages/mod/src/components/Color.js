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

const ColorAttribute = connect(
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
      add={addColor}
    />
  </Fragment>
))

const Color = () => (
  <SimpleList.OneColumn>
    <ColorAttribute />
    <ColorContent />
  </SimpleList.OneColumn>
)

export default Color
