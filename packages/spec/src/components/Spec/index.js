import styled from 'styled-components'
import Unit from './Unit'
import Meta from './Meta'

const Spec = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`
const Content = styled.div``
const Footer = styled.div``

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 70%;
`
const HeaderActions = styled.div``

Spec.Header = Header
Spec.Header.Title = HeaderTitle
Spec.Header.Actions = HeaderActions

Spec.Content = Content
Spec.Footer = Footer

Spec.Unit = Unit

export default Spec
