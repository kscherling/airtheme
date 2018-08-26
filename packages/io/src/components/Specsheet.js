import React from 'react'
import styled from 'styled-components'
import Spec from './Spec'
import Mod from './Mod'

const Container = styled.div`
  background: grey;
`

const Specsheet = () => (
  <Container>
    <Spec />
    <Mod />
  </Container>
)

export default Specsheet
