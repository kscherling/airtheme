import React from 'react'
import styled, { css } from 'styled-components'
import { resetButton, unpad, center, round } from '../style/utils'
import { plus, ndash } from '../constants/symbols'
import { UtilityButton } from './Button'

const Btn = styled(UtilityButton)`
  font-size: 85%;
  line-height: 1.25;

  &:hover {
    background: #e7f0f7;
  }

  &[type='button'] {
    ${unpad};
    ${center};
    ${round};
  }
`

const IncrementContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;
`

const IncrementBtn = props => (
  <Btn {...props} dimension="1.25rem">
    {plus}
  </Btn>
)
const DecrementBtn = props => (
  <Btn {...props} dimension="1.25rem">
    {ndash}
  </Btn>
)

// TODO: Validate - Don't allow negatives

const IncrementUnit = ({
  unit: { value } = {},
  update,
  options: { step = 1 } = {},
  castValueTo = val => val
} = {}) => (
  <IncrementContainer>
    <IncrementBtn
      onClick={() => update({ value: castValueTo(value + step) })}
    />
    <DecrementBtn
      onClick={() => update({ value: castValueTo(value - step) })}
    />
  </IncrementContainer>
)

export default IncrementUnit
