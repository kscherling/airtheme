import React from 'react'
import styled from 'styled-components'

const Th = styled.span`
  font-size: 80%;
  font-weight: bold;
`

const THead = ({ colNames = [] }) => colNames.map(colName => <Th>{colName}</Th>)

export default THead
