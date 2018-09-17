import React, { Fragment } from 'react'
import { castNumber } from '@airtheme/core'
import { withFontWeightContent } from '@airtheme/make'
import { IncrementUnit, InputUnitValue, InputUnitName } from '@airtheme/ui'
import EditForm from '../../components/EditForm'
import FontWeightSpecimen from '../../Specimen/FontWeight'

const Edit = ({ updateFontWeight, unit, attribute }) => (
  <EditForm>
    <EditForm.Units>
      <EditForm.Header>
        <strong>FontWeight</strong>
      </EditForm.Header>
      <EditForm.Specimen>
        <FontWeightSpecimen pad micro unit={unit} attribute={attribute} />
      </EditForm.Specimen>
      <EditForm.Units.Unit combinedGroup>
        <InputUnitName update={updateFontWeight} unit={unit} />
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
  </EditForm>
)

export default withFontWeightContent(Edit)
