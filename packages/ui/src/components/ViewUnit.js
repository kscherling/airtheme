import React from 'react'
import styled, { css } from 'styled-components'
import { resetInput } from '../style/utils'

const FauxInput = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 3px;
  color: #666;

  &:hover,
  &:focus,
  &:active {
    background: #f2f2f2;
    cursor: default;
  }
`

// TODO: Validate - Don't allow negatives

const ViewUnit = ({ view, viewable } = {}) => <FauxInput>{view}</FauxInput>

export default ViewUnit
