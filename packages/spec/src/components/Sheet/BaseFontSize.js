import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')
import Typeset from '../Typeset'

const Chip = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  color: #000000;
`

const BaseFontSize = ({ baseFontSize }) => (
  <Card pad border>
    <BaseAttributeEntry
      attribute={baseFontSize}
      render={({ unit, content: { value } } = {}) => (
        <Fragment>
          <Chip>
            {value}
            &nbsp;
            <small>{unit}</small>
          </Chip>
          <Chip>
            <Typeset />
          </Chip>
        </Fragment>
      )}
    />
  </Card>
)

export default connect(mapBaseFontSize)(BaseFontSize)
