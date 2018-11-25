import React from 'react'
import styled, { css } from 'styled-components'
import { get } from '@airtheme/theme-helpers'

const DEFAULT_TEXT = 'The quick brown fox jumped over the lazy dog.'
const DEFAULT_SYMBOL = 'Aa'

const cssForDeserialized = ({ cssAttr, deserializedValue }) =>
  deserializedValue &&
  cssAttr &&
  css`
    ${cssAttr}: ${deserializedValue};
  `

const Styles = styled.div`
  ${cssForDeserialized};
`

const Globals = styled.div`
  height: 100px;
  display: flex;
  ${'' /* align-items: center;
  justify-content: center; */}
  font-size: ${get.baseFontSize};
  line-height: ${get.baseLineHeight};
`

const Typography = props => (
  <Globals>
    <Styles {...props}>{DEFAULT_TEXT}</Styles>
  </Globals>
)

export default Typography
