import React, { Fragment } from 'react'
import { withFontWeightContent } from '@airtheme/make'
import NewUnit from '../../components/NewUnit'
import EditForm from '../../components/EditForm'
import { castNumber } from '@airtheme/core'
import { InvisibleInput, IncrementUnit, UtilityButton } from '@airtheme/ui'
import { attribute, unit } from '@airtheme/type'
import AddSpeciment from './AddSpecimen'

const Add = withFontWeightContent(({ addFontWeight, content, hide }) => (
  <NewUnit
    unitDefaults={{ value: 100 }}
    unit={unit.string}
    attribute={attribute.fontWeight}
    nextOrdinal={content.length + 1}
    render={({ attribute, unit, updateName, updateValue }) => (
      <EditForm>
        <EditForm.Name>
          <InvisibleInput
            placeholder="Key"
            onChange={e => updateName(e.target.value)}
            value={unit.name}
          />
        </EditForm.Name>
        <EditForm.Specimen>
          <AddSpeciment attribute={attribute} />
        </EditForm.Specimen>
        <EditForm.Units>
          <EditForm.Units.Unit incrementGroup>
            <InvisibleInput
              placeholder="Value"
              onChange={e => updateValue(castNumber(e.target.value))}
              value={unit.value}
            />
          </EditForm.Units.Unit>
        </EditForm.Units>
        <EditForm.Footer>
          <UtilityButton
            onClick={() => {
              addFontWeight(unit.value, unit.name, unit.ordinal)
              hide()
            }}
          >
            Add
          </UtilityButton>
        </EditForm.Footer>
      </EditForm>
    )}
  />
))

export default Add

{
  /* <IncrementUnit
  update={updateFontWeight}
  unit={unit}
  options={{ step: 100 }}
  castValueFrom={castNumber}
  castValueTo={castNumber}
/> */
}
