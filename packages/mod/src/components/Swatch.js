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
import { Input } from '../lib/basicControls'
import ViewTabs from '../lib/ViewTabs'
import AddForm from '../lib/AddForm'
import styled, { css } from 'styled-components'

const Unit = ({ unit, remove, update }) => 'hello'

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
      <Unit unit={unit} remove={removeSwatch} update={updateSwatch} />
    ))}
    <AddForm add={addSwatch} />
  </Fragment>
))

// (name, content = []) =>
//   content.length ? (
//     <Container shade>
//       <Name>{name}</Name>
//       {content.map((unit, idx) => printUnit(unit))}
//     </Container>
//   ) : (
//     <Container shade>
//       <Empty>{name}</Empty>
//     </Container>
//   )

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
