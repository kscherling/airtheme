import React from 'react'
import styled from 'styled-components'
import { StyledTab } from './Tab'

const List = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 70%;
  border-bottom: 1px solid #dce9f3;

  ${StyledTab} + ${StyledTab} {
    margin-left: 1rem;
  }
`

export default List
