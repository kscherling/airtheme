import React from 'react'
import styled, { css } from 'styled-components'

const noop = () => null

const PopoverTabContainer = styled.div`
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

const PopoverTab = ({ current, value, update, children }) => (
  <PopoverTabContainer
    active={current === value}
    current={current}
    onClick={() => update(value)}
  >
    {children}
  </PopoverTabContainer>
)

const PopoverTabs = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 70%;
  border-bottom: 1px solid #dce9f3;
  padding-left: 1rem;
  padding-right: 1rem;

  ${PopoverTabContainer} + ${PopoverTabContainer} {
    margin-left: 1rem;
  }
`

export const PopoverViewTabs = ({ view, viewable, updateView = noop }) => (
  <PopoverTabs>
    {viewable.map((unit, idx) => (
      <PopoverTab
        key={idx}
        active={view === unit}
        onClick={() => updateView(unit)}
      >
        {unit}
      </PopoverTab>
    ))}
  </PopoverTabs>
)

PopoverTabs.Tab = PopoverTab

export default PopoverTabs
