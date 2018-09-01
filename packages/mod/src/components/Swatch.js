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
import { Input } from '../lib/ModifyTypes'
import ViewTabs from '../lib/ViewTabs'
import AddForm from '../lib/AddForm'
import AddFormUnit from '../lib/AddFormUnit'
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
  grid-auto-flow: row;
  grid-gap: 0.75rem;

  ${({ shade }) =>
    shade &&
    css`
      background: #f2f2f2;
    `};

  margin-bottom: 1rem;
`

const SwatchContent = connect(
  mapSwatchContent,
  { addSwatch, removeSwatch, updateSwatch }
)(({ content, addSwatch, removeSwatch, updateSwatch }) => (
  <Fragment>
    {content.map((unit, idx) => (
      <AddFormUnit
        key={idx}
        unit={unit}
        remove={removeSwatch}
        update={updateSwatch}
      />
    ))}
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
