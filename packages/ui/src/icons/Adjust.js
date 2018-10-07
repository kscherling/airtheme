import React from 'react'
import styled from 'styled-components'
import Svg from './Svg'

const RotatedSvg = styled(Svg)`
  transform: rotate(90deg);
`

const IconAdjust = () => (
  <RotatedSvg>
    <title>adjust</title>
    <path d="M18 2c0-1.1-0.9-2-2-2s-2 0.9-2 2v18h-2v4h2v6c0 1.1 0.9 2 2 2s2-0.9 2-2v-6h2v-4h-2v-18zM6 2c0-1.1-0.9-2-2-2s-2 0.9-2 2v10h-2v4h2v14c0 1.1 0.9 2 2 2s2-0.9 2-2v-14h2v-4h-2v-10zM32 8h-2v-6c0-1.1-0.9-2-2-2s-2 0.9-2 2v6h-2v4h2v18c0 1.1 0.9 2 2 2s2-0.9 2-2v-18h2v-4z" />
  </RotatedSvg>
)

export default IconAdjust
