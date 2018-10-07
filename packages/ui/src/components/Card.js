import React from 'react'
import styled, { css } from 'styled-components'

const border = ({ border }) =>
  border &&
  css`
    box-shadow: 0px 1px 3px 0px #00000020;
  `

const pad = ({ pad }) =>
  pad &&
  css`
    padding: 1rem;
  `

const Card = styled.div`
  background: #ffffff;
  border-radius: 6px;

  ${border};
  ${pad};
`

export default Card
