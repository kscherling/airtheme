import React from 'react'
import styled, { css } from 'styled-components'
import { resetInput } from '../style/utils'
const noop = () => null

const InputContainer = styled.div``

const Input = styled.input.attrs({
  type: 'text'
})`
  ${resetInput};
`

// TODO: Validate - Don't allow negatives

const InputUnit = ({
  unit: { value = '', name = '' } = {},
  update = noop,
  placeholder = 'Update',
  cast = val => val
} = {}) => (
  <InputContainer>
    <Input
      value={value}
      onChange={e => update({ value: cast(e.target.value) })}
    />
  </InputContainer>
)

export default InputUnit
