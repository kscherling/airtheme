import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import ModalBlurContext from './ModalBlurContext'

const Blur = styled.div`
  transition: transform 0.15s ease-in-out, filter 0.15s ease-in-out;
  filter: blur(0);
  transform: scale(1);

  ${({ blur }) =>
    blur &&
    css`
      filter: blur(8px);
      transform: scale(1.02);
    `};
`

class ModalBlurProvider extends Component {
  state = {
    blur: false,
    blurOn: () => this.setState({ blur: true }),
    blurOff: () => this.setState({ blur: false })
  }

  render() {
    const { blur } = this.state
    const { children } = this.props
    return (
      <ModalBlurContext.Provider value={this.state}>
        <Blur blur={blur}>{children}</Blur>
      </ModalBlurContext.Provider>
    )
  }
}

export const ModalBlurConsumer = ModalBlurContext.Consumer
export default ModalBlurProvider
