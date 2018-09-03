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

const SwatchAttribute = connect(
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
      add={addSwatch}
    />
  </Fragment>
))

const Swatch = () => (
  <SimpleList.OneColumn>
    <SwatchAttribute />
    <SwatchContent />
  </SimpleList.OneColumn>
)

export default Swatch
