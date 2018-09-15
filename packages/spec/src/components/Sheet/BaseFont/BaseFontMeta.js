import React from 'react'
import { compose } from 'redux'
import {
  mapBaseFontSize,
  mapBaseLineHeight
} from '../../../utils/mapThemeToProps'
import connectTheme from '../../../utils/connectTheme'
import Detail from '../../SpecCard/Detail'

const BaseFontMeta = compose(
  connectTheme(mapBaseFontSize),
  connectTheme(mapBaseLineHeight)
)(({ baseFontSize, baseLineHeight }) => (
  <Detail>
    <Detail.Item>Font Size</Detail.Item>
    <Detail.Item>{baseFontSize}</Detail.Item>
    <Detail.Item>Line Height</Detail.Item>
    <Detail.Item>{baseLineHeight}</Detail.Item>
  </Detail>
))

export default BaseFontMeta
