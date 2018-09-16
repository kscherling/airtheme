import styled from 'styled-components'
import Meta from './Meta'

const Visual = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const Control = styled.div``
const Specimen = styled.div``

const Unit = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 0;
`

Unit.Specimen = Specimen
Unit.Meta = Meta
Unit.Control = Control

export default Unit
