import React from 'react'
import Spec from '../../components/Spec'
import Specimen from './Specimen'
import Meta from './Meta'
import AdjustPopover from './AdjustPopover'

const Unit = ({ unit }) => (
  <Spec.Unit>
    <Spec.Unit.Specimen>
      <Specimen unit={unit} />
    </Spec.Unit.Specimen>
    <Spec.Unit.Meta>
      <Meta unit={unit} />
    </Spec.Unit.Meta>
    <Spec.Unit.Actions>
      <AdjustPopover unit={unit} />
    </Spec.Unit.Actions>
  </Spec.Unit>
)

export default Unit