import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'

const SimpleList = styled(Grid.OneColumn).attrs({
  gridGap: '1rem'
})``

const Title = styled(Grid.OneColumn)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`

const Header = styled(Grid.OneColumn)`
  padding-bottom: 3rem;
  font-weight: bold;
  font-size: 1.15rem;
`

const Subheader = styled(Grid.OneColumn)`
  font-weight: bold;
`

const OneColumn = styled(Grid.OneColumn).attrs({
  gridGap: '1rem'
})``

const TwoColumns = styled(Grid.TwoColumns).attrs({
  gridGap: '1rem'
})``

const ThreeColumns = styled(Grid.ThreeColumns).attrs({
  gridGap: '1rem'
})``

const FourColumns = styled(Grid.FourColumns).attrs({
  gridGap: '1rem'
})``

SimpleList.Title = Title
SimpleList.Header = Header
SimpleList.Subheader = Subheader
SimpleList.OneColumn = OneColumn
SimpleList.TwoColumns = TwoColumns
SimpleList.ThreeColumns = ThreeColumns
SimpleList.FourColumns = FourColumns

export default SimpleList
