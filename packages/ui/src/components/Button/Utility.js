import React from 'react'
import styled, { css } from 'styled-components'
import { resetButton } from '../../style/utils'

const UtilityButton = styled.button.attrs({
  type: 'button'
})`
  ${resetButton};
  display: flex;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  color: #666666;

  &:hover {
    background: #e7f0f7;
    color: inherit;
  }

  ${({ active }) =>
    active &&
    css`
      background: #e7f0f7;
      color: inherit;
    `};
`
export default UtilityButton
