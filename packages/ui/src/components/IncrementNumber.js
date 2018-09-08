import React from 'react'
import styled, { css } from 'styled-components'
import { reset, unpad, center, round } from '../style/utils'
import { plus, ndash } from '../constants/symbols'

const Btn = styled.button.attrs({
  type: 'button'
})`
  ${reset};
  font-weight: bold;
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

const IncrementContainer = styled.div``

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

const IncrementNumber = ({
  value,
  update,
  options: { step = 1 } = {}
} = {}) => (
  <IncrementContainer>
    <IncrementBtn onClick={() => update({ value: value + step })} />
    <DecrementBtn onClick={() => update({ value: value - step })} />
  </IncrementContainer>
)

export default IncrementNumber
