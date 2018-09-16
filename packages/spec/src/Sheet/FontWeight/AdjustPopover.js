import React, { Fragment, Component } from 'react'
import styled, { css } from 'styled-components'
import { Popover, PopoverTabs } from '@airtheme/ui'
import AdjustButton from '../../components/AdjustButton'
import AdjustForm from './AdjustForm'

const Pad = styled.div`
  padding: 1rem;
`

const AdjustPopover = ({ unit }) => (
  <Popover
    renderTrigger={({ ref, show, active }) => (
      <AdjustButton innerRef={ref} active={active} onClick={show} />
    )}
    renderContent={() => (
      <Pad>
        <AdjustForm unit={unit} />
      </Pad>
    )}
  />
)

export default AdjustPopover
