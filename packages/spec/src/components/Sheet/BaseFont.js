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

const Chip = styled.div`
  padding: 1rem;
`

const DetailGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.25rem;
  color: #666666;
  font-size: 85%;
`
const DetailItem = styled.div``

const Detail = compose(
  connectTheme(mapBaseFontSize),
  connectTheme(mapBaseLineHeight)
)(({ baseFontSize, baseLineHeight }) => (
  <DetailGroup>
    <DetailItem>{castTitle(BASE_FONT_SIZE_KEY)}</DetailItem>
    <DetailItem>{baseFontSize}</DetailItem>
    <DetailItem>{castTitle(BASE_LINE_HEIGHT_KEY)}</DetailItem>
    <DetailItem>{baseLineHeight}</DetailItem>
  </DetailGroup>
))

const BaseFont = () => (
  <Card pad border>
    <Chip>
      <BaseFontSize />
      <BaseLineHeight />
    </Chip>

    <Typeset />
    <Detail />
  </Card>
)

export default BaseFont
