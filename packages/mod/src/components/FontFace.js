import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontFace,
  mapFontFaceContent,
  addFontFace,
  removeFontFace,
  updateFontFace
} from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
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
      add={addFontFace}
    />
  </Fragment>
))

const FontFace = () => (
  <SimpleList.OneColumn>
    <FontFaceAttribute />
    <FontFaceContent />
  </SimpleList.OneColumn>
)

export default FontFace
