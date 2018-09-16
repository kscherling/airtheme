import React from 'react'
import Spec from '../../components/Spec'
import Specimen from './Specimen'
import EditPopover from './EditPopover'
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
      <EditPopover />
    </Spec.Unit.Actions>
  </Spec.Unit>
)

export default Unit
