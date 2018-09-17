import React from 'react'
import Spec from '../../components/Spec'
import FontWeightSpecimen from '../../Specimen/FontWeight'
import Meta from './Meta'
import EditPopover from './EditPopover'
import Delete from './Delete'

const Unit = ({ unit, attribute }) => (
  <Spec.Unit>
    <Spec.Unit.Specimen>
      <FontWeightSpecimen unit={unit} attribute={attribute} />
    </Spec.Unit.Specimen>
    <Spec.Unit.Meta>
      <Meta unit={unit} />
    </Spec.Unit.Meta>
    <Spec.Unit.Actions>
      <Delete unit={unit} />
      <EditPopover unit={unit} attribute={attribute} />
    </Spec.Unit.Actions>
  </Spec.Unit>
)

export default Unit
