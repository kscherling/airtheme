import React from 'react'
import styled, { css } from 'styled-components'

const border = ({ border }) =>
  border &&
  css`
    border: 1px solid #dce9f3;
    box-shadow: 0px 0px 3px 1px #dce9f345;
  `

const pad = ({ pad }) =>
  pad &&
  css`
    padding: 1rem;
  `

const Card = styled.div`
  background: #ffffff;
  border-radius: 3px;

  ${border};
  ${pad};
`

export default Card
