import React from 'react'
import { compose } from 'redux'
import { mapBaseFontSize, mapBaseLineHeight } from '../../utils/mapThemeToProps'
import connectTheme from '../../utils/connectTheme'
import Meta from '../../components/Spec/Meta'

const BaseFontMeta = compose(
  connectTheme(mapBaseFontSize),
  connectTheme(mapBaseLineHeight)
)(({ baseFontSize, baseLineHeight }) => (
  <Meta>
    <Meta.Item>Font Size</Meta.Item>
    <Meta.Item>{baseFontSize}</Meta.Item>
    <Meta.Item>Line Height</Meta.Item>
    <Meta.Item>{baseLineHeight}</Meta.Item>
  </Meta>
))

export default BaseFontMeta
