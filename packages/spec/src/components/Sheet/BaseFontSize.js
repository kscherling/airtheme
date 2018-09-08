import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')
import Typeset from '../Typeset'
import { IncrementNumber } from '@airtheme/ui'
import { withBaseFontSizeContent } from '@airtheme/mod'

const Chip = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  color: #000000;
`

const Increment = withBaseFontSizeContent(
  ({ content = {}, updateBaseFontSize }) => (
    <IncrementNumber
      update={updateBaseFontSize}
      value={content.value}
      options={{ step: 1 }}
    />
  )
)

const BaseFontSize = ({ baseFontSize }) => (
  <Card pad border>
    <BaseAttributeEntry
      attribute={baseFontSize}
      render={({ unit, content: { value } } = {}) => (
        <Fragment>
          <Increment />
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
