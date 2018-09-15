import React, { Fragment } from 'react'
import connectTheme from '../../../utils/connectTheme'
import { compose } from 'redux'
import { Card } from '@airtheme/ui'
import SpecCard from '../../SpecCard'
import Detail from '../../SpecCard/Detail'
import { mapFontWeight } from '../../../utils/mapThemeToProps'

// const FontWeightMeta = connectTheme(mapFontWeight)(({ fontWeight }) => (
//   <Detail>
//     <Detail.Item>Font Weight</Detail.Item>
//     <Detail.Item>{fontWeight}</Detail.Item>
//   </Detail>
// ))

const FontWeight = () => (
  <Card pad border>
    <SpecCard>
      <SpecCard.Header>
        <SpecCard.Title>Font Weight</SpecCard.Title>
        <SpecCard.Controls>Adjust</SpecCard.Controls>
      </SpecCard.Header>
      <SpecCard.Content>Visualize</SpecCard.Content>
      <SpecCard.Footer>Footer</SpecCard.Footer>
    </SpecCard>
  </Card>
)

export default FontWeight
