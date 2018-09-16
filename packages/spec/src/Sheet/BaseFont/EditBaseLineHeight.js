import React, { Fragment } from 'react'
import { IncrementUnit, InputUnitValue } from '@airtheme/ui'
import { withBaseLineHeightContent } from '@airtheme/make'
import { castNumber } from '@airtheme/core'

const Increment = ({ unit, update }) => (
  <IncrementUnit
    update={update}
    unit={unit}
    options={{ step: 0.05 }}
    castValueTo={castNumber}
  />
)

const Input = ({ unit, update }) => (
  <InputUnitValue update={update} unit={unit} castValueTo={castNumber} />
)

const BaseLineHeight = ({ content = {}, updateBaseLineHeight }) => (
  <Fragment>
    <Input update={updateBaseLineHeight} unit={content} />
    <Increment update={updateBaseLineHeight} unit={content} />
  </Fragment>
)

export default withBaseLineHeightContent(BaseLineHeight)
