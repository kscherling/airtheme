import React from 'react'
import styled from 'styled-components'
import Grid from './Grid'

const SimpleList = styled(Grid.OneColumn).attrs({
  gridGap: '1rem'
})``

const Header = styled(Grid.OneColumn)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-weight: bold;
  font-size: 85%;
  text-transform: uppercase;
`

const TwoColumns = styled(Grid.TwoColumns).attrs({
  gridGap: '1rem'
})``

const FourColumns = styled(Grid.FourColumns).attrs({
  gridGap: '1rem'
})``

SimpleList.Header = Header
SimpleList.TwoColumns = TwoColumns

export default SimpleList
