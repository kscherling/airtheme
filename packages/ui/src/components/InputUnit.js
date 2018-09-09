import React from 'react'
import styled, { css } from 'styled-components'
import { resetInput } from '../style/utils'
const noop = () => null

const InputContainer = styled.div``

const Input = styled.input.attrs({
  type: 'text'
})`
  ${resetInput};
  border-radius: 3px;
  padding: 0.5rem 0.75rem;
  text-align: center;
  line-height: 1.25;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    background: #e7f0f7;
  }
`

// TODO: Validate - Don't allow negatives

const InputUnit = ({
  unit: { value = '', name = '' } = {},
  update = noop,
  placeholder = 'Update',
  castValueTo = val => val
} = {}) => (
  <Input
    value={value}
    onChange={e => update({ value: castValueTo(e.target.value) })}
  />
)

export default InputUnit
