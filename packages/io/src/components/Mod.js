import React from 'react'
import styled from 'styled-components'
import AirthemeMod from '@airtheme/mod'

const Container = styled.div`
  background: #f2f2f2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Mod = () => (
  <Container>
    <AirthemeMod />
  </Container>
)

export default Mod
