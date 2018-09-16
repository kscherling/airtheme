import React from 'react'
import { UtilityButton, IconTrash } from '@airtheme/ui'
import { withFontWeightContent } from '@airtheme/make'

const Delete = withFontWeightContent(({ removeFontWeight, unit }) => (
  <UtilityButton onClick={() => removeFontWeight(unit)}>
    <IconTrash />
  </UtilityButton>
))

export default Delete
