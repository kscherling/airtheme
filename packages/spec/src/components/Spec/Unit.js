import styled from 'styled-components'
import Meta from './Meta'

const Unit = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 0;
  grid-gap: 1rem;
  grid-template-areas:
    "specimen actions"
    "meta actions";
}
`

const Actions = styled.div`
  grid-area: actions;
`
const Specimen = styled.div`
  grid-area: specimen;
`

Unit.Specimen = Specimen
Unit.Meta = Meta
Unit.Actions = Actions

export default Unit
