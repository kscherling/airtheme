import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Popover } from '@airtheme/ui'
import AdjustButton from '../../components/AdjustButton'
import Edit from './Edit'

const EditPopover = () => (
  <Popover
    renderTrigger={({ ref, show, active }) => (
      <AdjustButton innerRef={ref} active={active} onClick={show} />
    )}
    renderContent={() => <Edit />}
  />
)

export default EditPopover
