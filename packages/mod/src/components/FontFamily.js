import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontFamily,
  mapFontFamilyContent,
  updateFontFamilyView,
  addFontFamily,
  removeFontFamily,
  updateFontFamily
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'
import { SimpleList } from '@airtheme/ui'

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
      add={addFontFamily}
    />
  </Fragment>
))

const FontFamily = () => (
  <SimpleList.OneColumn>
    <FontFamilyAttribute />
    <FontFamilyContent />
  </SimpleList.OneColumn>
)

export default FontFamily
