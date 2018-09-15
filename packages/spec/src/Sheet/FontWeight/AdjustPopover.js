import React, { Fragment, Component } from 'react'
import styled, { css } from 'styled-components'
import { Popover, PopoverTabs } from '@airtheme/ui'
import BaseLineHeight from './BaseLineHeight'
import BaseFontSize from './BaseFontSize'
import AdjustButton from '../../components/AdjustButton'

const Pad = styled.div`
  padding: 1rem;
`

const AdjustPopover = () => (
  <Popover
    renderTrigger={({ ref, show, active }) => (
      <AdjustButton innerRef={ref} active={active} onClick={show} />
    )}
    renderContent={() => (
      <TabContainer
        default="fontSize"
        renderTabs={({ update, current }) => (
          <Fragment>
            <PopoverTabs.Tab value="fontSize" current={current} update={update}>
              Font Size
            </PopoverTabs.Tab>
            <PopoverTabs.Tab
              value="lineHeight"
              current={current}
              update={update}
            >
              Line Height
            </PopoverTabs.Tab>
          </Fragment>
        )}
        renderContent={({ current }) => <Pad>{panelFor(current)}</Pad>}
      />
    )}
  />
)

export default AdjustPopover
