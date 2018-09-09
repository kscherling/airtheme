import React, { Component, Fragment } from 'react'
import { Manager, Reference, Popper } from 'react-popper'
import { createPortal } from 'react-dom'
const noop = () => null

const renderTrigger = ({ ref }) => null
const renderContent = () => null

class Popover extends Component {
  static defaultProps = {
    renderTrigger: noop,
    renderContent: noop
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { renderTrigger, renderContent } = this.props

    return (
      <Manager>
        <Reference>
          {({ ref }) => {
            renderTrigger({ ref, on, off })
          }}
        </Reference>
        <Popper placement="right">
          {({ ref, style, placement, arrowProps }) => (
            <div ref={ref} style={style} data-placement={placement}>
              {renderContent()}
              <div ref={arrowProps.ref} style={arrowProps.style} />
            </div>
          )}
        </Popper>
      </Manager>
    )
  }
}

export default Popover
