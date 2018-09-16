import styled from 'styled-components'

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

const Specimen = styled.div`
  grid-area: specimen;
`
const Meta = styled.div`
  grid-area: meta;
`
const Actions = styled.div`
  grid-area: actions;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
  align-items: flex-start;
`

Unit.Specimen = Specimen
Unit.Meta = Meta
Unit.Actions = Actions

export default Unit
