import styled from 'styled-components'

const Meta = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25rem;
  color: #666666;
  font-size: 70%;
  width: fit-content;
  grid-area: meta;
`
const Item = styled.div`
  &:nth-child(even) {
    font-weight: bold;
  }
`

Meta.Item = Item

export default Meta
