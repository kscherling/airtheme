import React from 'react'
import styled from 'styled-components'
import { Card } from '@airtheme/ui'
import Spec from '../../components/Spec'
import Content from './Content'
import Add from './Add'

const FontWeight = () => (
  <Card pad border>
    <Spec>
      <Spec.Header>
        <Spec.Header.Title>Font Weight</Spec.Header.Title>
        <Spec.Header.Actions>
          <Add />
        </Spec.Header.Actions>
      </Spec.Header>
      <Spec.Content>
        <Content />
      </Spec.Content>
      <Spec.Footer />
    </Spec>
  </Card>
)

export default FontWeight
