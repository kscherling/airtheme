import styled, { css } from 'styled-components'

const ViewTabs = styled.div`
  display: flex;
  flex-direction: row;
`

const Tab = styled.a`
  padding: 0.5rem;
  text-decoration: line-through;
  color: #999;

  ${({ active }) =>
    active &&
    css`
      text-decoration: none;
      color: inherit;
    `};

  &:hover {
    cursor: pointer;
    color: inherit;
  }
`

ViewTabs.Tab = Tab
export default ViewTabs
