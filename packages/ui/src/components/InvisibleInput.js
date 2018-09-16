import React from 'react'
import styled, { css } from 'styled-components'
import { resetInput } from '../style/utils'

const InvisibleInput = styled.input.attrs({
  type: 'text'
})`
  ${resetInput};
  padding: 0.75rem 1rem;

  &:hover,
  &:focus,
  &:active {
  }
`

export default InvisibleInput
