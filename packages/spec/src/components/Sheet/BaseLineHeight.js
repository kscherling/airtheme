import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseLineHeight } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')

const Chip = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ theme }) => theme.baseFontSize};
  color: #000000;
`

const BaseLineHeight = ({ baseLineHeight }) => (
  <Card pad border>
    <BaseAttributeEntry
      attribute={baseLineHeight}
      render={({
        content: { value } = {},
        deserialized: { baseLineHeight } = {}
      } = {}) => (
        <Chip lineHeight={baseLineHeight}>
          <span>{value}</span>
        </Chip>
      )}
    />
  </Card>
)

export default connect(mapBaseLineHeight)(BaseLineHeight)
