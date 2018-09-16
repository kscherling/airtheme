import React, { Fragment } from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { Card } from '@airtheme/ui'
import Spec from '../../components/Spec'
import { withFontWeightAttribute, withFontWeightContent } from '@airtheme/make'
import AdjustPopover from './AdjustPopover'
import Specimen from './Specimen'
import Meta from './Meta'

const Content = withFontWeightContent(({ content }) => (
  <Spec.AttributeContent
    content={content}
    renderUnit={({ unit, idx }) => (
      <Spec.Unit>
        <Spec.Unit.Visual>
          <Specimen unit={unit} />
          <Meta unit={unit} />
        </Spec.Unit.Visual>
        <Control>
          <AdjustPopover unit={unit} />
        </Control>
      </Spec.Unit>
    )}
  />
))

const FontWeight = () => (
  <Card pad border>
    <Spec>
      <Spec.Header>
        <Spec.Header.Title>Font Weight</Spec.Header.Title>
        <Spec.Header.Controls>{` `}</Spec.Header.Controls>
      </Spec.Header>
      <Spec.Content>
        <Content />
      </Spec.Content>
      <Spec.Footer>{` `}</Spec.Footer>
    </Spec>
  </Card>
)

export default FontWeight
