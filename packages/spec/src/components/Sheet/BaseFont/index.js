import React, { Fragment } from 'react'
import connectTheme from '../../../utils/connectTheme'
import { compose } from 'redux'
import { Card } from '@airtheme/ui'
import SpecCard from '../../SpecCard'
import Detail from '../../SpecCard/Detail'
import {
  mapBaseFontSize,
  mapBaseLineHeight
} from '../../../utils/mapThemeToProps'
import Typeset from './Typeset'
import AdjustPopover from './AdjustPopover'

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

const BaseFont = () => (
  <Card pad border>
    <SpecCard>
      <SpecCard.Header>
        <SpecCard.Title>Base Font</SpecCard.Title>
        <SpecCard.Controls>
          <AdjustPopover />
        </SpecCard.Controls>
      </SpecCard.Header>
      <SpecCard.Content>
        <Typeset />
      </SpecCard.Content>
      <SpecCard.Footer>
        <BaseFontMeta />
      </SpecCard.Footer>
    </SpecCard>
  </Card>
)

export default BaseFont
