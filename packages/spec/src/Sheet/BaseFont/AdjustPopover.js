import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { IconAdjust, Popover, UtilityButton, Tabs } from '@airtheme/ui'
import EditBaseLineHeight from './EditBaseLineHeight'
import EditBaseFontSize from './EditBaseFontSize'
import AdjustButton from '../../components/AdjustButton'

const Pad = styled.div`
  padding: 1rem;
`

const panelFor = current => {
  switch (current) {
    case 'fontSize':
      return <EditBaseFontSize />
    case 'lineHeight':
      return <EditBaseLineHeight />
    default:
      return null
  }
}

const AdjustPopover = () => (
  <Popover
    renderTrigger={({ ref, show, active }) => (
      <AdjustButton innerRef={ref} active={active} onClick={show} />
    )}
    renderContent={() => (
      <Pad>
        <EditBaseFontSize />
        <EditBaseLineHeight />
      </Pad>
    )}
  />
)

export default AdjustPopover
