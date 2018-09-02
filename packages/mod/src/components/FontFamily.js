import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontFamily,
  mapFontFamilyContent,
  updateFontFamilyView,
  addFontFamily,
  removeFontFamily,
  updateFontFamily,
  SimpleList
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

const FontFamilyAttribute = connect(
  mapFontFamily,
  { updateFontFamilyView }
)(({ fontFamily: { view, viewable }, updateFontFamilyView }) => (
  <Attribute
    view={view}
    viewable={viewable}
    updateView={updateFontFamilyView}
  />
))

const FontFamilyContent = connect(
  mapFontFamilyContent,
  { addFontFamily, removeFontFamily, updateFontFamily }
)(({ content, addFontFamily, removeFontFamily, updateFontFamily }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeFontFamily}
      update={updateFontFamily}
    />
    <AddUnit nextOrdinal={content.length + 1} add={addFontFamily} />
  </Fragment>
))

const FontFamily = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Font Family</SimpleList.Header>
    <FontFamilyAttribute />
    <FontFamilyContent />
  </SimpleList.OneColumn>
)

export default FontFamily