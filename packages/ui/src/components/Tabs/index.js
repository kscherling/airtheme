import React, { Component } from 'react'
import styled from 'styled-components'
import List from './List'
import Panel from './Panel'
import Tab from './Tab'

/* ------------------------
Usage

<Tabs
  default="fontSize"
  renderTabs={({ update, current }) => (
    <Fragment>
      <Tabs.Tab value="one" current={current} update={update}>
        Tab One
      </Tabs.Tab>
      <Tabs.Tab value="two" current={current} update={update}>
        Tab Two
      </Tabs.Tab>
    </Fragment>
  )}
  renderContent={({ current }) => panelFor(current)}
/>

const panelFor = current => {
  switch (current) {
    case 'one':
      return <ComponentOne />
    case 'two':
      return <ComponentTwo />
    default:
      return null
  }
}
------------------------ */

const StyledTabs = styled.div``

class Tabs extends Component {
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
      <StyledTabs>
        <List>{renderTabs({ update, current })}</List>
        <Panel>{renderContent({ current })}</Panel>
      </StyledTabs>
    )
  }
}

Tabs.Tab = Tab

export default Tabs
