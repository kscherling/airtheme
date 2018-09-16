import React from 'react'
import styled, { css } from 'styled-components'
import { resetButton, round } from '../../style/utils'

const UtilityButton = styled.button.attrs({
  type: 'button'
})`
  ${resetButton};
  display: flex;
  color: #888888;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  font-weight: bold;

  &:hover,
  &:focus {
    background: #fff;
    box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.35);
  }

  &:active {
    background: #f9f9f9;
    box-shadow: inset 0 1px 2px 0px rgba(0, 0, 0, 0.15);
  }

  ${({ active }) =>
    active &&
    css`
      &,
      &:active,
      &:focus {
        background: #f9f9f9;
        box-shadow: inset 0 1px 2px 0px rgba(0, 0, 0, 0.15);
      }
    `};
`
export default UtilityButton
