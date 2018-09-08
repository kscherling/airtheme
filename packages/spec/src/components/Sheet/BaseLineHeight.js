import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { IncrementUnit, InputUnit, EditBaseUnitGroup } from '@airtheme/ui'
import { withBaseLineHeightContent } from '@airtheme/mod'
import { castNumber } from '@airtheme/core'

const Increment = withBaseLineHeightContent(
  ({ content = {}, updateBaseLineHeight }) => (
    <IncrementUnit
      update={updateBaseLineHeight}
      unit={content}
      options={{ step: 0.05 }}
      castValueTo={castNumber}
    />
  )
)

const Input = withBaseLineHeightContent(
  ({ content = {}, updateBaseLineHeight }) => (
    <InputUnit
      update={updateBaseLineHeight}
      unit={content}
      castValueTo={castNumber}
    />
  )
)

const BaseLineHeight = () => (
  <EditBaseUnitGroup>
    <Input />
    <Increment />
  </EditBaseUnitGroup>
)

export default BaseLineHeight
