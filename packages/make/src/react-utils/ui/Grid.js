import React from 'react'
import styled, { css } from 'styled-components'

const transparent = 'rgba(0,0,0,0.02)'

const Grid = styled.div`
  display: grid;
  width: 100%;

  ${({ gridGap }) => {
    console.log(gridGap)
    return (
      gridGap &&
      css`
        grid-gap: ${gridGap};
      `
    )
  }}

  ${({ gridTemplateColumns }) =>
    gridTemplateColumns &&
    css`
      grid-template-columns: ${gridTemplateColumns};
    `}

  ${({ gridTemplateRows }) =>
    gridTemplateRows &&
    css`
      grid-template-rows: ${gridTemplateRows};
    `}

  ${({ paddingBottom }) =>
    paddingBottom &&
    css`
      padding-bottom: ${paddingBottom};
    `}

  input, button {
    width: inherit;
  }
`

const OneColumn = styled(Grid).attrs({
  gridTemplateColumns: '1fr'
})`
  grid-auto-flow: row;
`

const TwoColumns = styled(Grid).attrs({
  gridTemplateColumns: 'repeat(2, 1fr)'
})`
  grid-auto-flow: row;
`

const ThreeColumns = styled(Grid).attrs({
  gridTemplateColumns: 'repeat(3, 1fr)'
})`
  grid-auto-flow: row;
`

const FourColumns = styled(Grid).attrs({
  gridTemplateColumns: 'repeat(4, 1fr)'
})`
  grid-auto-flow: row;
`

Grid.OneColumn = OneColumn
Grid.TwoColumns = TwoColumns
Grid.ThreeColumns = ThreeColumns
Grid.FourColumns = FourColumns

export default Grid
