import styled from 'styled-components'
import Meta from './Meta'

const SpecCard = styled.div`
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
const Title = styled.div`
  font-weight: bold;
  font-size: 70%;
`
const Controls = styled.div``

SpecCard.Header = Header
SpecCard.Content = Content
SpecCard.Footer = Footer
SpecCard.Title = Title
SpecCard.Controls = Controls
SpecCard.Meta = Meta

export default SpecCard
