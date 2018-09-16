import React, { Fragment, Component } from 'react'
import styled, { css } from 'styled-components'
import { IconAdjust, Popover, UtilityButton, PopoverTabs } from '@airtheme/ui'
import EditBaseLineHeight from './EditBaseLineHeight'
import EditBaseFontSize from './EditBaseFontSize'
import AdjustButton from '../../components/AdjustButton'

const PopoverContent = styled.div``
const Pad = styled.div`
  padding: 1rem;
`

class TabContainer extends Component {
  static defaultProps = {
    default: '',
    renderTabs: () => null,
    renderContent: () => null
  }

  constructor(props) {
    super(props)

    this.state = {
      current: props.default
    }
  }

  update = updated => this.setState({ current: updated })

  render() {
    const { update } = this
    const { renderTabs, renderContent } = this.props
    const { current } = this.state

    return (
      <Fragment>
        <PopoverTabs>{renderTabs({ update, current })}</PopoverTabs>
        <PopoverContent>{renderContent({ current })}</PopoverContent>
      </Fragment>
    )
  }
}

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
