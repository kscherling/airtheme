import React, { Fragment } from 'react'
import styled from 'styled-components'
import { compose } from 'redux'
import { Card } from '@airtheme/ui'
import SpecCard from '../../components/SpecCard'
import { withFontWeightAttribute, withFontWeightContent } from '@airtheme/make'
import AdjustPopover from './AdjustPopover'
import Specimen from './Specimen'
import Meta from './Meta'

const Visual = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Control = styled.div``

const Item = ({ unit }) => (
  <Unit>
    <Visual>
      <Specimen unit={unit} />
      <Meta unit={unit} />
    </Visual>
    <Control>
      <AdjustPopover unit={unit} />
    </Control>
  </Unit>
)

const Unit = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem 0;
`

const Content = withFontWeightContent(({ content }) =>
  content.map((unit, idx) => <Item key={idx} unit={unit} />)
)

const FontWeight = () => (
  <Card pad border>
    <SpecCard>
      <SpecCard.Header>
        <SpecCard.Title>Font Weight</SpecCard.Title>
        <SpecCard.Controls>{` `}</SpecCard.Controls>
      </SpecCard.Header>
      <SpecCard.Content>
        <Content />
      </SpecCard.Content>
      <SpecCard.Footer>{` `}</SpecCard.Footer>
    </SpecCard>
  </Card>
)

export default FontWeight
