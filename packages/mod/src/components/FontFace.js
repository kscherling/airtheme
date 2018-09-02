import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontFace,
  mapFontFaceContent,
  addFontFace,
  removeFontFace,
  updateFontFace,
  SimpleList
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

const FontFaceAttribute = connect(mapFontFace)(
  ({ fontFace: { view, viewable } }) => (
    <Attribute view={view} viewable={viewable} />
  )
)

const FontFaceContent = connect(
  mapFontFaceContent,
  { addFontFace, removeFontFace, updateFontFace }
)(({ content, addFontFace, removeFontFace, updateFontFace }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeFontFace}
      update={updateFontFace}
    />
    <AddUnit nextOrdinal={content.length + 1} add={addFontFace} />
  </Fragment>
))

const FontFace = () => (
  <SimpleList.OneColumn>
    <FontFaceAttribute />
    <FontFaceContent />
  </SimpleList.OneColumn>
)

export default FontFace
