import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import BaseLineHeight from './BaseLineHeight'
import BaseFontSize from './BaseFontSize'
import Typeset from '../Typeset'

const Chip = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`

const BaseFont = () => (
  <Card pad border>
    <Chip>
      <BaseFontSize />
      <BaseLineHeight />
    </Chip>
    <Chip>
      <Typeset />
    </Chip>
  </Card>
)

export default BaseFont
