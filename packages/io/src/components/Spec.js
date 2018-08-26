import React from 'react'
import styled from 'styled-components'
import AirthemeSpec from '@airtheme/spec'

const Container = styled.div`
  background: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Spec = () => {
  return (
    <Container>
      <AirthemeSpec />
    </Container>
  )
}

export default Spec
