import React, { Fragment } from 'react'
import { castNumber } from '@airtheme/core'
import { withFontWeightContent } from '@airtheme/make'
import { IncrementUnit, InputUnitValue, InputUnitName } from '@airtheme/ui'
import EditForm from '../../components/EditForm'

const Edit = ({ updateFontWeight, unit }) => (
  <EditForm>
    <EditForm.Name>
      <InputUnitName update={updateFontWeight} unit={unit} />
    </EditForm.Name>
    <EditForm.Units>
      <EditForm.Units.Unit incrementGroup>
        <InputUnitValue
          update={updateFontWeight}
          unit={unit}
          castValueTo={castNumber}
        />
        <IncrementUnit
          update={updateFontWeight}
          unit={unit}
          options={{ step: 100 }}
          castValueFrom={castNumber}
          castValueTo={castNumber}
        />
      </EditForm.Units.Unit>
    </EditForm.Units>
    <EditForm.Footer />
  </EditForm>
)

export default withFontWeightContent(Edit)
