import styled, { css } from 'styled-components'

const Tab = styled.a`
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

const SimpleTabs = styled.div`
  display: flex;
  flex-direction: row;

  ${Tab} + ${Tab} {
    margin-left: 1rem;
  }

`

SimpleTabs.Tab = Tab

export default SimpleTabs
