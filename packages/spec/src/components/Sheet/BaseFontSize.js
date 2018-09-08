import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')

const Chip = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: ${({ fontSize }) => fontSize};
  color: #000000;
`

const BaseFontSize = ({ baseFontSize }) => (
  <Card pad border>
    <BaseAttributeEntry
      attribute={baseFontSize}
      render={({
        content: { value } = {},
        deserialized: { baseFontSize } = {}
      } = {}) => (
        <Chip fontSize={baseFontSize}>
          <span>{value}</span>
        </Chip>
      )}
    />
  </Card>
)

export default connect(mapBaseFontSize)(BaseFontSize)
