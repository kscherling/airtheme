import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

const preventDefault = e => {
  e.stopPropagation()
  e.nativeEvent.stopImmediatePropagation()
  e.preventDefault()
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  display: grid;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  background: #ffffff;
  width: ${({ width }) => width};
  border-radius: 6px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.25);
`

const ModalContent = ({ children, hide, width }) => (
  <Backdrop onClick={hide}>
    <Container onClick={preventDefault} width={width}>
      {children}
    </Container>
  </Backdrop>
)

export default ModalContent
