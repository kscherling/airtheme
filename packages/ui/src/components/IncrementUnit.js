import React from 'react'
import styled, { css } from 'styled-components'
import { resetButton, unpad, center, round } from '../style/utils'
import { plus, ndash } from '../constants/symbols'
import { UtilityButton } from './Button'

const Btn = styled(UtilityButton)`
  font-size: 85%;
  line-height: 1.25;

  &:hover,
  &:focus {
    background: #fff;
    box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.35);
  }

  &:active {
    background: #f9f9f9;
    box-shadow: inset 0 1px 2px 0px rgba(0, 0, 0, 0.15);
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
  unit,
  update,
  options: { step = 1 } = {},
  castValueFrom = val => val,
  castValueTo = val => val
} = {}) => {
  const value = castValueFrom(unit.value)

  return (
    <IncrementContainer>
      <IncrementBtn
        onClick={() => update(unit, { value: castValueTo(value + step) })}
      />
      <DecrementBtn
        onClick={() => update(unit, { value: castValueTo(value - step) })}
      />
    </IncrementContainer>
  )
}

export default IncrementUnit
