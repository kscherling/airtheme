import React from 'react'
import connectTheme from '../../utils/connectTheme'
import { mapFontWeight } from '../../utils/mapThemeToProps'
import Spec from '../../components/Spec'

const Meta = connectTheme(mapFontWeight)(({ fontWeight, unit = {} }) => (
  <Spec.Meta>
    <Spec.Meta.Item />
    <Spec.Meta.Item>{unit.name}</Spec.Meta.Item>
    <Spec.Meta.Item>Font Weight</Spec.Meta.Item>
    <Spec.Meta.Item>{fontWeight[unit.name]}</Spec.Meta.Item>
  </Spec.Meta>
))

export default Meta
