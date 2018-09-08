import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseFontSize } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')
import Typeset from '../Typeset'
import { IncrementUnit, InputUnit } from '@airtheme/ui'
import { withBaseFontSizeContent } from '@airtheme/mod'

const Chip = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const BaseInputGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.25rem;
`

const Increment = withBaseFontSizeContent(
  ({ content = {}, updateBaseFontSize }) => (
    <IncrementUnit
      update={updateBaseFontSize}
      unit={content}
      options={{ step: 1 }}
    />
  )
)

const Input = withBaseFontSizeContent(
  ({ content = {}, updateBaseFontSize }) => (
    <InputUnit
      update={updateBaseFontSize}
      unit={content}
      castValueTo={Number}
    />
  )
)

const BaseFontSize = ({ baseFontSize }) => (
  <Fragment>
    <Card pad border>
      <Chip>
        <BaseInputGroup>
          <Input />
          <Increment />
        </BaseInputGroup>
      </Chip>
    </Card>
    <Chip>
      <Typeset />
    </Chip>
  </Fragment>
)

export default BaseFontSize
