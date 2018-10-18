import React from 'react'
import styled, { css } from 'styled-components'
import Spec from '../../components/Spec'
import Deserialize from '../../components/Deserialize'

import { get } from '@airtheme/theme-helpers'

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

const Global = styled.div`
  font-size: ${get.baseFontSize};
  line-height: ${get.baseLineHeight};
`

const FontWeightSpecimen = ({
  attribute,
  unit,
  micro = false,
  pad = false
}) => (
  <Global>
    <Styles micro={micro} pad={pad}>
      {micro ? MICRO_TEXT : DEFAULT_TEXT}
    </Styles>
  </Global>
)

export default FontWeightSpecimen
