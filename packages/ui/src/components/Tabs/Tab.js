import React from 'react'
import styled, { css } from 'styled-components'
import { noop } from '@airtheme/core'

export const StyledTab = styled.div`
  border-bottom: 3px solid transparent;
  padding: 1rem 0 0.75rem;

  &:hover {
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom-color: #ff6663;
    `};
`

const Tab = ({ current, value, update, children }) => (
  <StyledTab
    active={current === value}
    current={current}
    onClick={() => update(value)}
  >
    {children}
  </StyledTab>
)

export default Tab
