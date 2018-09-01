import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapSwatch,
  mapSwatchContent,
  updateSwatchView,
  addSwatch,
  removeSwatch,
  updateSwatch,
  SimpleList
} from '@airtheme/make'
import { AttributeContent, Attribute, AddUnit } from '../lib/ModifyTypes'

export const SwatchAttribute = connect(
  mapSwatch,
  { updateSwatchView }
)(({ swatch: { view, viewable }, updateSwatchView }) => (
  <Attribute view={view} viewable={viewable} updateView={updateSwatchView} />
))

const SwatchContent = connect(
  mapSwatchContent,
  { addSwatch, removeSwatch, updateSwatch }
)(({ content, addSwatch, removeSwatch, updateSwatch }) => (
  <Fragment>
    <AttributeContent
      content={content}
      remove={removeSwatch}
      update={updateSwatch}
    />
    <AddUnit nextOrdinal={content.length + 1} add={addSwatch} />
  </Fragment>
))

export const Swatch = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Swatch</SimpleList.Header>
    <SwatchAttribute />
    <SwatchContent />
  </SimpleList.OneColumn>
)
