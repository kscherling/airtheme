import React, { Fragment } from 'react'
import styled from 'styled-components'
import connectTheme from '../../utils/connectTheme'
import { compose } from 'redux'
import { Card } from '@airtheme/ui'
import SpecCard from '../../components/SpecCard'
import Detail from '../../components/SpecCard/Detail'
import { withFontWeightAttribute, withFontWeightContent } from '@airtheme/make'
import { baseTypography } from '../../utils/styleHelpers'

// const FontWeightMeta = connectTheme(mapFontWeight)(({ fontWeight }) => (
//   <Detail>
//     <Detail.Item>Font Weight</Detail.Item>
//     <Detail.Item>{fontWeight}</Detail.Item>
//   </Detail>
// ))

const SPECIMEN = 'The quick brown fox jumped over the lazy dog.'

const Visual = styled.div``
const Control = styled.div``

const mapFontWeight = ({
  theme: { setting: { fontWeight } = {} } = {}
} = {}) => ({
  fontWeight
})
const fontWeight = key => props => mapFontWeight(props).fontWeight[key]

const Specimen = styled.div.attrs({ children: SPECIMEN })`
  font-weight: ${({ unitName, ...props }) => fontWeight(unitName)(props)};
  ${baseTypography};
`

const Item = ({ unit }) => (
  <Unit>
    <Visual>
      <Specimen unitName={unit.name} />
      <div>Meta</div>
    </Visual>
    <Control>Control</Control>
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
        <SpecCard.Controls>Add</SpecCard.Controls>
      </SpecCard.Header>
      <SpecCard.Content>
        <Content />
      </SpecCard.Content>
      <SpecCard.Footer>Footer</SpecCard.Footer>
    </SpecCard>
  </Card>
)

export default FontWeight
