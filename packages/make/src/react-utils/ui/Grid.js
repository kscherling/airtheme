import React from 'react'
import styled, { css } from 'styled-components'

const transparent = 'rgba(0,0,0,0.02)'

const Grid = styled.div`
  display: grid;
  background: ${transparent};

  ${({gridGap}) => gridGap && css`
    grid-gap: ${gridGap};
  `}

  ${({gridTemplateColumns}) => gridTemplateColumns && css`
    grid-template-columns: ${gridTemplateColumns}
  `}

  ${({gridTemplateRows}) => gridTemplateRows && css`
    grid-template-rows: ${gridTemplateRows}
  `}
`

const OneColumn = styled(Grid).attrs({
  gridTemplateColumns: '1fr'
})`
  grid-auto-flow: row;
`

const TwoColumns = styled(Grid).attrs({
  gridTemplateColumns: 'repeat(2, 1fr)'
})`
  grid-auto-flow: column;
`

const FourColumns = styled(Grid).attrs({
  gridTemplateColumns: 'repeat(4, 1fr)'
})`
  grid-auto-flow: column;
`

Grid.OneColumn = OneColumn
Grid.TwoColumns = TwoColumns
Grid.FourColumns = FourColumns

export default Grid
