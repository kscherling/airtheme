import React from 'react'
import styled from 'styled-components'
import Spec from './Spec'
import Mod from './Mod'

const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  min-height: 100vh;
`

const Specsheet = () => (
  <Container>
    <Spec />
    <Mod />
  </Container>
)

export default Specsheet
