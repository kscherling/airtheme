import React, { Component, Fragment } from 'react'
import { Manager, Reference, Popper } from 'react-popper'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
const noop = () => null
const preventDefault = e => {
  e.stopPropagation()
  e.nativeEvent.stopImmediatePropagation()
  e.preventDefault()
}

const popOverBg = '#fff'
const PopoverContainer = styled.div`
  background: ${popOverBg};
  border-radius: 3px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  margin-top: 6px;
  width: ${({ width }) =>
    css`
      ${width};
    `};
`

const PopoverArrow = styled.div`
  position: absolute;
  border: 5px solid transparent;

  &[data-placement*="bottom"] {
    top: -10px
    border-bottom-color: ${popOverBg};
  }
`

class Popover extends Component {
  static defaultProps = {
    renderTrigger: noop,
    renderContent: noop,
    width: '200px'
  }

  constructor(props) {
    super(props)

    this.rootElement = document.querySelector('#popover-root')
  }

  state = {
    on: false
  }

  show = () => {
    document.addEventListener('click', this.hide)
    this.setState({ on: true })
  }

  hide = () => {
    document.removeEventListener('click', this.hide)
    this.setState({ on: false })
  }

  render() {
    const { on } = this.state
    const { show, rootElement } = this
    const { renderTrigger, renderContent, width } = this.props

    return (
      <Manager>
        <Reference>
          {({ ref }) => renderTrigger({ ref, show, active: on })}
        </Reference>
        {on &&
          createPortal(
            <Popper
              placement="bottom"
              modifiers={{
                preventOverflow: { enabled: false },
                hide: { enabled: false }
              }}
            >
              {({ ref, style, placement, arrowProps }) => (
                <PopoverContainer
                  width={width}
                  innerRef={ref}
                  style={style}
                  data-placement={placement}
                  onClick={preventDefault}
                >
                  {renderContent()}
                  <PopoverArrow
                    data-placement={placement}
                    innerRef={arrowProps.ref}
                    style={arrowProps.style}
                  />
                </PopoverContainer>
              )}
            </Popper>,
            rootElement
          )}
      </Manager>
    )
  }
}

export default Popover
