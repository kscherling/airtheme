import React, { Fragment, Component } from 'react'
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
      <Tabs
        default="fontSize"
        renderTabs={({ update, current }) => (
          <Fragment>
            <Tabs.Tab value="fontSize" current={current} update={update}>
              Font Size
            </Tabs.Tab>
            <Tabs.Tab value="lineHeight" current={current} update={update}>
              Line Height
            </Tabs.Tab>
          </Fragment>
        )}
        renderContent={({ current }) => <Pad>{panelFor(current)}</Pad>}
      />
    )}
  />
)

export default AdjustPopover
