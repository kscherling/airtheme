import React from 'react'
import { Card } from '@airtheme/ui'
import Spec from '../../components/Spec'
import Content from './Content'

const BaseFont = () => (
  <Card pad border>
    <Spec>
      <Spec.Header>
        <Spec.Header.Title>Base Font</Spec.Header.Title>
        <Spec.Header.Actions />
      </Spec.Header>
      <Spec.Content>
        <Content />
      </Spec.Content>
      <Spec.Footer />
    </Spec>
  </Card>
)

export default BaseFont
