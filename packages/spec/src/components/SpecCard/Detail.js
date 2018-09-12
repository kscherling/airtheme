import styled from 'styled-components'

const Detail = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25rem;
  color: #666666;
  font-size: 70%;
  width: fit-content;
`
const Item = styled.div`
  &:nth-child(even) {
    font-weight: bold;
  }
`

Detail.Item = Item

export default Detail
