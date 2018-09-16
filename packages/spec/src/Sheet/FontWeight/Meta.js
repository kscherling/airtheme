import React, { Fragment } from 'react'
import connectTheme from '../../utils/connectTheme'
import { mapFontWeight } from '../../utils/mapThemeToProps'
import Spec from '../../components/Spec'
import MetaGroup from '../../components/MetaGroup'

const Meta = connectTheme(mapFontWeight)(({ fontWeight, unit = {} }) => (
  <MetaGroup>
    <MetaGroup.Item>Key</MetaGroup.Item>
    <MetaGroup.Item>{unit.name}</MetaGroup.Item>
    <MetaGroup.Item>Font Weight</MetaGroup.Item>
    <MetaGroup.Item>{fontWeight[unit.name]}</MetaGroup.Item>
  </MetaGroup>
))

export default Meta
