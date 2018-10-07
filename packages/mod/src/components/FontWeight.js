import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapFontWeight,
  mapFontWeightContent,
  updateFontWeightView,
  addFontWeight,
  removeFontWeight,
  updateFontWeight
} from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
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
      add={addFontWeight}
    />
  </Fragment>
))

const FontWeight = () => (
  <SimpleList.OneColumn>
    <FontWeightAttribute />
    <FontWeightContent />
  </SimpleList.OneColumn>
)

export default FontWeight
