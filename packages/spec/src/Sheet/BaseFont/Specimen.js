import React from 'react'
import styled from 'styled-components'
import {
  lowercase,
  uppercase,
  numerals,
  puncuation
} from '../../constants/typography'
import { baseTypography } from '../../utils/styleHelpers'

const TypesetContainer = styled.div`
  transform: font-size 0.2s linear;
  word-break: break-all;
  ${baseTypography};
`

const Specimen = () => (
  <TypesetContainer>
    <div>{uppercase}</div>
    <div>{lowercase}</div>
    <div>{numerals}</div>
    <div>{puncuation}</div>
  </TypesetContainer>
)

export default Specimen
