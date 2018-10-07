import styled from 'styled-components'

const MetaGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
  font-size: 70%;
`
const Item = styled.div`
  &:first-child {
    color: #999;
    font-weight: 300;
    font-size: 1rem;
  }

  &:nth-child(even) {
    color: #999;
  }
`

MetaGroup.Item = Item

export default MetaGroup
