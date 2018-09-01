import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {
  mapSwatch,
  mapSwatchContent,
  updateSwatchView,
  addSwatch,
  removeSwatch,
  updateSwatch
} from '@airtheme/make'
import ViewTabs from '../lib/ViewTabs'
import AddForm from '../lib/AddForm'
import AddFormUnit from '../lib/AddFormUnit'
import { AttributeContent } from '../lib/ModifyTypes'

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
    <AddForm nextOrdinal={content.length + 1} add={addSwatch} />
  </Fragment>
))

export const Swatch = connect(
  mapSwatch,
  { updateSwatchView }
)(({ swatch: { view, viewable }, updateSwatchView }) => (
  <Fragment>
    <ViewTabs>
      {viewable.map((unit, idx) => (
        <ViewTabs.Tab
          key={idx}
          active={view === unit}
          onClick={() => updateSwatchView(unit)}
        >
          {unit}
        </ViewTabs.Tab>
      ))}
    </ViewTabs>
    <SwatchContent />
  </Fragment>
))
