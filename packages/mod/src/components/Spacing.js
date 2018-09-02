import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapSpacing,
  mapSpacingContent,
  updateSpacingView,
  addSpacing,
  removeSpacing,
  updateSpacing,
  SimpleList
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

const SpacingAttribute = connect(
  mapSpacing,
  { updateSpacingView }
)(({ spacing: { view, viewable }, updateSpacingView }) => (
  <Attribute view={view} viewable={viewable} updateView={updateSpacingView} />
))

const SpacingContent = connect(
  mapSpacingContent,
  { addSpacing, removeSpacing, updateSpacing }
)(({ content, addSpacing, removeSpacing, updateSpacing }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeSpacing}
      update={updateSpacing}
    />
    <AddUnit nextOrdinal={content.length + 1} add={addSpacing} />
  </Fragment>
))

const Spacing = () => (
  <SimpleList.OneColumn>
    <SpacingAttribute />
    <SpacingContent />
  </SimpleList.OneColumn>
)

export default Spacing
