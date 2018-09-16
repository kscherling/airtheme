import React from 'react'
import connectTheme from '../../utils/connectTheme'
import { mapFontWeight } from '../../utils/mapThemeToProps'
import SpecCard from '../../components/SpecCard'

const Meta = connectTheme(mapFontWeight)(({ fontWeight, unit = {} }) => (
  <SpecCard.Meta>
    <SpecCard.Meta.Item />
    <SpecCard.Meta.Item>{unit.name}</SpecCard.Meta.Item>
    <SpecCard.Meta.Item>Font Weight</SpecCard.Meta.Item>
    <SpecCard.Meta.Item>{fontWeight[unit.name]}</SpecCard.Meta.Item>
  </SpecCard.Meta>
))

export default Meta
