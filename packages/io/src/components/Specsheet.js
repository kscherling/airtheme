import React from 'react'
import styled from 'styled-components'
import MakeProvider from '../store/MakeProvider'
import Spec from './Spec'
import Mod from './Mod'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
`

const Specsheet = () => (
  <MakeProvider>
    <Container>
      <Spec />
      <Mod />
    </Container>
  </MakeProvider>
)

export default Specsheet
