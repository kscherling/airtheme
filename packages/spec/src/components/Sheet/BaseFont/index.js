import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card, PopoverTabs } from '@airtheme/ui'
import Typeset from './Typeset'
import connectTheme from '../../../utils/connectTheme'
import {
  mapBaseFontSize,
  mapBaseLineHeight
} from '../../../utils/mapThemeToProps'
import { compose } from 'redux'
import {
  castTitle,
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY
} from '@airtheme/core'
import { IconAdjust, Popover, UtilityButton } from '@airtheme/ui'
import AdjustPopover from './AdjustPopover'
import SpecCard from '../SpecCard'
import Detail from '../SpecCard/Detail'

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
