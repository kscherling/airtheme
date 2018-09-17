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
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem;

  > strong {
    font-size: 70%;
  }
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
  display: grid;
  justify-items: flex-end;
  padding: 1rem;
`

EditForm.Header = Header
EditForm.Name = Name
EditForm.Units = Units
EditForm.Units.Unit = Unit
EditForm.Specimen = Specimen
EditForm.Footer = Footer

export default EditForm
