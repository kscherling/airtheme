import React, { Fragment } from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import * as Icons from '../src/index'
import styled from 'styled-components'

const CELL_DIM = '100px'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
`

const Cell = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: ${CELL_DIM};
  width: ${CELL_DIM};
  border: 1px solid #ccc;
  grid-auto-flow: column;
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
    <Aircon name="trash" />
    <Aircon name="adjust" />
  </Fragment>
))
