import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontWeight,
  mapFontWeightContent,
  updateFontWeightView,
  addFontWeight,
  removeFontWeight,
  updateFontWeight,
  SimpleList
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

const FontWeightAttribute = connect(mapFontWeight)(
  ({ fontWeight: { view, viewable } }) => (
    <Attribute view={view} viewable={viewable} />
  )
)

const FontWeightContent = connect(
  mapFontWeightContent,
  { addFontWeight, removeFontWeight, updateFontWeight }
)(({ content, addFontWeight, removeFontWeight, updateFontWeight }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeFontWeight}
      update={updateFontWeight}
    />
    <AddUnit nextOrdinal={content.length + 1} add={addFontWeight} />
  </Fragment>
))

const FontWeight = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Font Weight</SimpleList.Header>
    <FontWeightAttribute />
    <FontWeightContent />
  </SimpleList.OneColumn>
)

export default FontWeight