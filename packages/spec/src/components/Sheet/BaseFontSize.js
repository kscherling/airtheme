import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '@airtheme/make'
import { mapBaseFontSize as mapThemeBaseFontSize } from '../../utils/mapThemeToProps'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')

const Chip = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  font-size: ${({ fontSize, unit }) => `${fontSize}${unit}`};
  color: #000000;
`

const BaseFontSize = ({ baseFontSize }) => {
  return (
    <Card pad border>
      <BaseAttributeEntry
        attribute={baseFontSize}
        render={({ name, value, object }) => (
          <Chip fontSize={value} unit={object}>
            <span>{value}</span>
          </Chip>
        )}
      />
    </Card>
  )
}

export default compose(
  connectTheme(mapThemeBaseFontSize),
  connect(mapBaseFontSize)
)(BaseFontSize)
