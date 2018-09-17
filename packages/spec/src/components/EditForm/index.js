import styled, { css } from 'styled-components'

const dividerBottom = css`
  border-bottom: 1px solid #eee;
`
const dividerTop = css`
  border-top: 1px solid #eee;
`

const incrementGroup = ({ incrementGroup }) =>
  incrementGroup &&
  css`
    display: grid;
    grid-template-columns: 1fr auto;
  `

const combinedGroup = ({ combinedGroup }) =>
  combinedGroup &&
  css`
    display: grid;
    grid-template-columns: 1fr 1fr auto;
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
  ${dividerBottom};
`
const Units = styled.div``
const Unit = styled.div`
  ${incrementGroup};
  ${combinedGroup};

  > div {
    padding: 0.5rem;
  }

  & + & {
    ${dividerTop};
  }
`
const Specimen = styled.div`
  ${dividerBottom};
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
