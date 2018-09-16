import React from 'react'
import { Card } from '@airtheme/ui'
import SpecCard from '../../components/SpecCard'
import Specimen from './Specimen'
import AdjustPopover from './AdjustPopover'
import BaseFontMeta from './BaseFontMeta'

const BaseFont = () => (
  <Card pad border>
    <SpecCard>
      <SpecCard.Header>
        <SpecCard.Title>Base Font</SpecCard.Title>
        <SpecCard.Controls>
          <AdjustPopover />
        </SpecCard.Controls>
      </SpecCard.Header>
      <SpecCard.Content>
        <Specimen />
      </SpecCard.Content>
      <SpecCard.Footer>
        <BaseFontMeta />
      </SpecCard.Footer>
    </SpecCard>
  </Card>
)

export default BaseFont
