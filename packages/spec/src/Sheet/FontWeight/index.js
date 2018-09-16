import React from 'react'
import styled from 'styled-components'
import { Card } from '@airtheme/ui'
import Spec from '../../components/Spec'
import Content from './Content'

const FontWeight = () => (
  <Card pad border>
    <Spec>
      <Spec.Header>
        <Spec.Header.Title>Font Weight</Spec.Header.Title>
        <Spec.Header.Actions />
      </Spec.Header>
      <Spec.Content>
        <Content />
      </Spec.Content>
      <Spec.Footer />
    </Spec>
  </Card>
)

export default FontWeight
