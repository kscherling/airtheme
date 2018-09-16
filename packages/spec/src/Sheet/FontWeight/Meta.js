import React, { Fragment } from 'react'
import connectTheme from '../../utils/connectTheme'
import { mapFontWeight } from '../../utils/mapThemeToProps'
import Spec from '../../components/Spec'

const Meta = connectTheme(mapFontWeight)(({ fontWeight, unit = {} }) => (
  <Fragment>
    <Spec.Unit.Meta.Item />
    <Spec.Unit.Meta.Item>{unit.name}</Spec.Unit.Meta.Item>
    <Spec.Unit.Meta.Item>Font Weight</Spec.Unit.Meta.Item>
    <Spec.Unit.Meta.Item>{fontWeight[unit.name]}</Spec.Unit.Meta.Item>
  </Fragment>
))

export default Meta
