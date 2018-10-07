import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapSpacing,
  mapSpacingContent,
  updateSpacingView,
  addSpacing,
  removeSpacing,
  updateSpacing
} from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
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
      add={addSpacing}
    />
  </Fragment>
))

const Spacing = () => (
  <SimpleList.OneColumn>
    <SpacingAttribute />
    <SpacingContent />
  </SimpleList.OneColumn>
)

export default Spacing
