import React, { Fragment } from 'react'
import styled from 'styled-components'
import connectTheme from '../../utils/connectTheme'
import { compose } from 'redux'
import { Card } from '@airtheme/ui'
import SpecCard from '../../components/SpecCard'
import Detail from '../../components/SpecCard/Detail'
import { withFontWeightAttribute, withFontWeightContent } from '@airtheme/make'
import AdjustPopover from './AdjustPopover'
import { mapFontWeight as mapThemeFontWeight } from '../../utils/mapThemeToProps'
import Specimen from './Specimen'

const Meta = connectTheme(mapThemeFontWeight)(({ fontWeight, unit = {} }) => (
  <Detail>
    <Detail.Item />
    <Detail.Item>{unit.name}</Detail.Item>
    <Detail.Item>Font Weight</Detail.Item>
    <Detail.Item>{fontWeight[unit.name]}</Detail.Item>
  </Detail>
))

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
