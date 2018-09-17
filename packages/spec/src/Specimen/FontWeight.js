import React from 'react'
import styled, { css } from 'styled-components'
import Spec from '../components/Spec'
import Deserialize from '../components/Deserialize'

const DEFAULT_TEXT = 'The quick brown fox jumped over the lazy dog.'
const MICRO_TEXT = 'Aa'

const Styles = styled.div`
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ pad }) =>
    pad &&
    css`
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    `};

  ${({ micro }) =>
    micro &&
    css`
      min-height: 72px;
    `};
`

const FontWeightSpecimen = ({
  attribute,
  unit,
  micro = false,
  pad = false
}) => (
  <Deserialize
    attribute={attribute}
    unit={unit}
    render={({ deserialized }) => (
      <Styles
        fontWeight={Object.values(deserialized)[0]}
        micro={micro}
        pad={pad}
      >
        {micro ? MICRO_TEXT : DEFAULT_TEXT}
      </Styles>
    )}
  />
)

export default FontWeightSpecimen
