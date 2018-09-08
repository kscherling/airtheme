import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseSpacing } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')

const Chip = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  color: #000000;
`

const BaseSpacing = ({ baseSpacing }) => (
  <Card pad border>
    <BaseAttributeEntry
      attribute={baseSpacing}
      render={({
        content: { value } = {},
        deserialized: { baseSpacing } = {}
      } = {}) => (
        <Chip>
          <span>{value}</span>
        </Chip>
      )}
    />
  </Card>
)

export default connect(mapBaseSpacing)(BaseSpacing)
