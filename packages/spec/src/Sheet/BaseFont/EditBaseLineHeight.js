import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import {
  IncrementUnit,
  InputUnitValue,
  EditBaseUnitGroup,
  ViewUnit
} from '@airtheme/ui'
import {
  withBaseLineHeightContent,
  withBaseLineHeightAttribute
} from '@airtheme/make'
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
    <InputUnitValue
      update={updateBaseLineHeight}
      unit={content}
      castValueTo={castNumber}
    />
  )
)

const View = withBaseLineHeightAttribute(
  ({ baseLineHeight: { view, viewable } }) => (
    <ViewUnit view={view} viewable={viewable} />
  )
)

const BaseLineHeight = () => (
  <EditBaseUnitGroup>
    <Input />
    <View />
    <Increment />
  </EditBaseUnitGroup>
)

export default BaseLineHeight
