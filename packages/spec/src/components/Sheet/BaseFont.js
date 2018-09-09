import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import BaseLineHeight from './BaseLineHeight'
import BaseFontSize from './BaseFontSize'
import Typeset from '../Typeset'
import connectTheme from '../../utils/connectTheme'
import { mapBaseFontSize, mapBaseLineHeight } from '../../utils/mapThemeToProps'
import { compose } from 'redux'
import {
  castTitle,
  BASE_FONT_SIZE_KEY,
  BASE_LINE_HEIGHT_KEY
} from '@airtheme/core'
import { IconAdjust, Popover, UtilityButton } from '@airtheme/ui'

const DetailGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25rem;
  color: #666666;
  font-size: 75%;
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
  grid-gap: 2rem;
`
const Handle = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: space-between;
`
const HandleTitle = styled.div`
  font-weight: bold;
  font-size: 75%;
`
const HandleControls = styled.div`
  font-weight: bold;
  font-size: 75%;
`

const Visualizer = styled.div``
const Meta = styled.div``
const Pad = styled.div`
  width: 100%;
  padding: 1rem;
`

const BaseFont = () => (
  <Card pad border>
    <Group>
      <Handle>
        <HandleTitle>Base Font</HandleTitle>
        <HandleControls>
          <Popover
            renderTrigger={({ ref, show, active }) => (
              <UtilityButton innerRef={ref} active={active} onClick={show}>
                <IconAdjust />
              </UtilityButton>
            )}
            renderContent={() => (
              <Pad>
                <BaseFontSize />
                <BaseLineHeight />
              </Pad>
            )}
          />
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
