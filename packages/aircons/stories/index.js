import React, { Fragment } from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import * as Icons from '../src/index'
import styled from 'styled-components'

const CELL_DIM = '100px'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  width: fit-content
  font-family: sans-serif;
  font-size: 11px;
`

const Cell = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: ${CELL_DIM};
  width: ${CELL_DIM};
  grid-auto-flow: row;
`

const Aircon = ({ name }) => {
  const Icon = Icons[name]
  return (
    <Cell>
      <Icon />
      <label>{name}</label>
    </Cell>
  )
}

const GridDecorator = storyFn => <Grid>{storyFn()}</Grid>
addDecorator(GridDecorator)

storiesOf('Icons', module).add('16pt', () => (
  <Fragment>
    <Aircon name="adjust" />
    <Aircon name="dragHorz" />
    <Aircon name="dragVert" />
    <Aircon name="minus" />
    <Aircon name="moreHorz" />
    <Aircon name="moreVert" />
    <Aircon name="plus" />
    <Aircon name="trash" />
    <Aircon name="permalink" />
    <Aircon name="clipboard" />
    <Aircon name="docs" />
    <Aircon name="download" />
  </Fragment>
))
