import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import {
  IncrementUnit,
  InputUnitValue,
  EditBaseUnitGroup,
  ViewUnit
} from '@airtheme/ui'
import {
  withBaseFontSizeContent,
  withBaseFontSizeAttribute
} from '@airtheme/make'
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
    <InputUnitValue
      update={updateBaseFontSize}
      unit={content}
      castValueTo={castNumber}
    />
  )
)

const View = withBaseFontSizeAttribute(
  ({ baseFontSize: { view, viewable } }) => (
    <ViewUnit view={view} viewable={viewable} />
  )
)

const BaseFontSize = () => (
  <EditBaseUnitGroup>
    <Input />
    <View />
    <Increment />
  </EditBaseUnitGroup>
)

export default BaseFontSize
