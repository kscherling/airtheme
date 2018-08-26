import React from 'react'
import styled from 'styled-components'
import AirthemeSpec from '@airtheme/spec'

const Container = styled.div`
  background: #ccc;
`

const Spec = () => {
  return (
    <Container>
      <AirthemeSpec />
    </Container>
  )
}

export default Spec
