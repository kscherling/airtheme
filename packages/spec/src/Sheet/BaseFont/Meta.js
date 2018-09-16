import React, { Fragment } from 'react'
import { compose } from 'redux'
import connectTheme from '../../utils/connectTheme'
import { mapBaseFontSize, mapBaseLineHeight } from '../../utils/mapThemeToProps'
import Spec from '../../components/Spec'
import MetaGroup from '../../components/MetaGroup'

const Meta = compose(
  connectTheme(mapBaseFontSize),
  connectTheme(mapBaseLineHeight)
)(({ baseFontSize, baseLineHeight }) => (
  <Fragment>
    <MetaGroup>
      <MetaGroup.Item>Key</MetaGroup.Item>
      <MetaGroup.Item>baseFontSize</MetaGroup.Item>
      <MetaGroup.Item>Font Size</MetaGroup.Item>
      <MetaGroup.Item>{baseFontSize}</MetaGroup.Item>
    </MetaGroup>
    <MetaGroup>
      <MetaGroup.Item>Key</MetaGroup.Item>
      <MetaGroup.Item>baseLineHeight</MetaGroup.Item>
      <MetaGroup.Item>Line Height</MetaGroup.Item>
      <MetaGroup.Item>{baseLineHeight}</MetaGroup.Item>
    </MetaGroup>
  </Fragment>
))

export default Meta
