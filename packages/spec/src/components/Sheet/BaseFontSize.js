import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
const { compose } = require('recompose')
import { IncrementUnit, InputUnit, EditBaseUnitGroup } from '@airtheme/ui'
import { withBaseFontSizeContent } from '@airtheme/mod'
import { castNumber } from '@airtheme/core'

const Increment = withBaseFontSizeContent(
  ({ content = {}, updateBaseFontSize }) => (
    <IncrementUnit
      update={updateBaseFontSize}
      unit={content}
      options={{ step: 1 }}
      castValueTo={castNumber}
    />
  )
)

const Input = withBaseFontSizeContent(
  ({ content = {}, updateBaseFontSize }) => (
    <InputUnit
      update={updateBaseFontSize}
      unit={content}
      castValueTo={castNumber}
    />
  )
)

const BaseFontSize = () => (
  <EditBaseUnitGroup>
    <Input />
    <Increment />
  </EditBaseUnitGroup>
)

export default BaseFontSize
