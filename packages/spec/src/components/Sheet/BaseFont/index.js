import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card, PopoverTabs } from '@airtheme/ui'
import Typeset from '../../Typeset'
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

const DetailGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25rem;
  color: #666666;
  font-size: 70%;
  width: fit-content;
`
const DetailItem = styled.div`
  &:nth-child(even) {
    font-weight: bold;
  }
`

const Detail = compose(
  connectTheme(mapBaseFontSize),
  connectTheme(mapBaseLineHeight)
)(({ baseFontSize, baseLineHeight }) => (
  <DetailGroup>
    <DetailItem>Font Size</DetailItem>
    <DetailItem>{baseFontSize}</DetailItem>
    <DetailItem>Line Height</DetailItem>
    <DetailItem>{baseLineHeight}</DetailItem>
  </DetailGroup>
))

const Group = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Handle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`
const HandleTitle = styled.div`
  font-weight: bold;
  font-size: 70%;
`
const HandleControls = styled.div`
  font-weight: bold;
  font-size: 70%;
`

const Visualizer = styled.div``
const Meta = styled.div``

const BaseFont = () => (
  <Card pad border>
    <Group>
      <Handle>
        <HandleTitle>Base Font</HandleTitle>
        <HandleControls>
          <AdjustPopover />
        </HandleControls>
      </Handle>
      <Visualizer>
        <Typeset />
      </Visualizer>
      <Meta>
        <Detail />
      </Meta>
    </Group>
  </Card>
)

export default BaseFont
