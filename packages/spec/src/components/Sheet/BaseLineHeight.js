import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseLineHeight } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')
import Typeset from '../Typeset'

const Chip = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const BaseLineHeight = ({ baseLineHeight }) => (
  <Card pad border>
    <BaseAttributeEntry
      attribute={baseLineHeight}
      render={({
        unit,
        content: { value } = {},
        deserialized: { baseLineHeight } = {}
      } = {}) => (
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

export default connect(mapBaseLineHeight)(BaseLineHeight)
