import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { castNumber } from '@airtheme/core'
import { withFontWeightContent } from '@airtheme/make'
import { IncrementUnit, InputUnitValue, InputUnitName } from '@airtheme/ui'

const divider = css`
  border-bottom: 1px solid #eee;
`

const EditForm = styled.div`
  display: grid;
`
const Name = styled.div`
  ${divider};
`

const Units = styled.div``
const Unit = styled.div`
  ${({ incrementGroup }) =>
    incrementGroup &&
    css`
      display: grid;
      grid-template-columns: 1fr auto;
    `};

  > div {
    padding: 0.5rem;
  }
`
const Footer = styled.div``

EditForm.Name = Name
EditForm.Units = Units
EditForm.Units.Unit = Unit
EditForm.Footer = Footer

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
