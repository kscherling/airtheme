import styled from 'styled-components'

const MetaGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25rem;
  color: #888888;
  font-size: 70%;
  width: fit-content;

  & + & {
    margin-top: 0.5rem;
  }
`
const Item = styled.div`
  &:nth-child(even) {
    font-weight: bold;
  }
`

MetaGroup.Item = Item

export default MetaGroup
