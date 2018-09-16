import React from 'react'
import Spec from '../../components/Spec'
import Specimen from './Specimen'
import AdjustPopover from './AdjustPopover'
import Meta from './Meta'

const Unit = ({ unit }) => (
  <Spec.Unit>
    <Spec.Unit.Specimen>
      <Specimen />
    </Spec.Unit.Specimen>
    <Spec.Unit.Meta>
      <Meta />
    </Spec.Unit.Meta>
    <Spec.Unit.Actions>
      <AdjustPopover />
    </Spec.Unit.Actions>
  </Spec.Unit>
)

export default Unit
