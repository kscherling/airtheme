import styled, { css } from 'styled-components'

const divider = css`
  border-bottom: 1px solid #eee;
`

const incrementGroup = ({ incrementGroup }) =>
  incrementGroup &&
  css`
    display: grid;
    grid-template-columns: 1fr auto;
  `

const EditForm = styled.div`
  display: grid;
`
const Name = styled.div`
  ${divider};
`
const Units = styled.div``
const Unit = styled.div`
  ${incrementGroup};

  > div {
    padding: 0.5rem;
  }
`
const Specimen = styled.div`
  ${divider};
`

const Footer = styled.div`
  padding: 1rem;
`

EditForm.Name = Name
EditForm.Units = Units
EditForm.Units.Unit = Unit
EditForm.Specimen = Specimen
EditForm.Footer = Footer

export default EditForm
