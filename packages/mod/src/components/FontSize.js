import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontSize,
  mapFontSizeContent,
  updateFontSizeView,
  addFontSize,
  removeFontSize,
  updateFontSize
} from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

const FontSizeAttribute = connect(
  mapFontSize,
  { updateFontSizeView }
)(({ fontSize: { view, viewable }, updateFontSizeView }) => (
  <Attribute view={view} viewable={viewable} updateView={updateFontSizeView} />
))

const FontSizeContent = connect(
  mapFontSizeContent,
  { addFontSize, removeFontSize, updateFontSize }
)(({ content, addFontSize, removeFontSize, updateFontSize }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeFontSize}
      update={updateFontSize}
      add={addFontSize}
    />
  </Fragment>
))

const FontSize = () => (
  <SimpleList.OneColumn>
    <FontSizeAttribute />
    <FontSizeContent />
  </SimpleList.OneColumn>
)

export default FontSize
