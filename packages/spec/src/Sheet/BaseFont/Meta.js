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
      <MetaGroup.Item>baseFont</MetaGroup.Item>
      <MetaGroup.Item>
        {baseFontSize} / {baseLineHeight}
      </MetaGroup.Item>
    </MetaGroup>
  </Fragment>
))

export default Meta
