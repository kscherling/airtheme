import React, { Fragment } from 'react'
import { IncrementUnit, InputUnitValue } from '@airtheme/ui'
import { withBaseFontSizeContent } from '@airtheme/make'
import { castNumber } from '@airtheme/core'

const Increment = ({ unit, update }) => (
  <IncrementUnit
    update={update}
    unit={unit}
    options={{ step: 1 }}
    castValueTo={castNumber}
  />
)

const Input = ({ unit, update }) => (
  <InputUnitValue update={update} unit={unit} castValueTo={castNumber} />
)

const BaseFontSize = ({ content = {}, updateBaseFontSize }) => (
  <Fragment>
    <Input update={updateBaseFontSize} unit={content} />
    <Increment update={updateBaseFontSize} unit={content} />
  </Fragment>
)

export default withBaseFontSizeContent(BaseFontSize)
