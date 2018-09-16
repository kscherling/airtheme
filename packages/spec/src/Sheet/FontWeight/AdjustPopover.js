import React, { Fragment, Component } from 'react'
import styled, { css } from 'styled-components'
import { Popover } from '@airtheme/ui'
import AdjustButton from '../../components/AdjustButton'
import EditFontWeight from './EditFontWeight'

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
        <EditFontWeight unit={unit} />
      </Pad>
    )}
  />
)

export default AdjustPopover
