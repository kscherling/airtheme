import React from 'react'
import styled, { css } from 'styled-components'
import { resetInput } from '../style/utils'
const noop = () => null

const Input = styled.input.attrs({
  type: 'text'
})`
  ${resetInput};
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 3px;

  &:hover,
  &:focus,
  &:active {
    background: #e7f0f7;
  }
`

// TODO: Validate - Don't allow negatives
const InputUnit = ({
  unit = {},
  update = noop,
  placeholder = 'Update',
  castValueTo = val => val
} = {}) => (
  <Input
    value={unit.value}
    onChange={e => update(unit, { value: castValueTo(e.target.value) })}
  />
)

export default InputUnit
