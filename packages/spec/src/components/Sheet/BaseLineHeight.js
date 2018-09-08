import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import { connect } from 'react-redux'
import { mapBaseLineHeight } from '@airtheme/make'
import connectTheme from '../../utils/connectTheme'
import BaseAttributeEntry from '../../utils/BaseAttributeEntry'
const { compose } = require('recompose')
import Typeset from '../Typeset'
import { IncrementUnit, InputUnit } from '@airtheme/ui'
import { withBaseLineHeightContent } from '@airtheme/mod'

const Chip = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const BaseInputGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.25rem;
`

const Increment = withBaseLineHeightContent(
  ({ content = {}, updateBaseLineHeight }) => (
    <IncrementUnit
      update={updateBaseLineHeight}
      unit={content}
      options={{ step: 0.05 }}
    />
  )
)

const Input = withBaseLineHeightContent(
  ({ content = {}, updateBaseLineHeight }) => (
    <InputUnit
      update={updateBaseLineHeight}
      unit={content}
      castValueTo={Number}
    />
  )
)

const BaseLineHeight = () => (
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

export default BaseLineHeight
