import React, { Component, Fragment, createContext } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import ModalContent from './ModalContent'
import { noop } from '@airtheme/core'

class Modal extends Component {
  static defaultProps = {
    renderTrigger: noop,
    renderContent: noop,
    width: '400px'
  }

  constructor(props) {
    super(props)

    this.rootElement = document.querySelector('#modal-root')
  }

  state = {
    on: true
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
    const { renderTrigger, renderContent, width } = this.props
    const { show, hide, rootElement } = this

    return (
      <Fragment>
        {renderTrigger({ show, active: on })}
        {on &&
          createPortal(
            <ModalContent hide={hide} width={width}>
              {renderContent({ hide })}
            </ModalContent>,
            rootElement
          )}
      </Fragment>
    )
  }
}

export default Modal
