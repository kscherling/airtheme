import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import {
  IncrementUnit,
  InputUnit,
  EditBaseUnitGroup,
  ViewUnit
} from '@airtheme/ui'
import { withFontWeightContent, withFontWeightAttribute } from '@airtheme/make'
import { castNumber } from '@airtheme/core'
import { compose } from 'redux'

const AdjustForm = ({
  unit,
  updateFontWeight,
  fontWeight: { view, viewable }
}) => (
  <EditBaseUnitGroup>
    <InputUnit update={updateFontWeight} unit={unit} castValueTo={castNumber} />
    <ViewUnit view={view} viewable={viewable} />
    <IncrementUnit
      update={updateFontWeight}
      unit={unit}
      options={{ step: 100 }}
      castValueFrom={castNumber}
      castValueTo={castNumber}
    />
  </EditBaseUnitGroup>
)

export default compose(
  withFontWeightContent,
  withFontWeightAttribute
)(AdjustForm)
