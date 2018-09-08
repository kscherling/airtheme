import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Card } from '@airtheme/ui'
import Typeset from '../Typeset'

const Chip = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

const BaseFont = () => (
  <Card pad border>
    <Chip>
      <Typeset />
    </Chip>
  </Card>
)

export default BaseFont
