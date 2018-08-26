import React from 'react'
import styled from 'styled-components'
import AirthemeSpec from '@airtheme/spec'
import { connect } from 'react-redux'

const Container = styled.div`
  background: #ccc;
`

const Spec = (...args) => {
  console.log(args)

  return (
    <Container>
      <AirthemeSpec />
    </Container>
  )
}

export default connect()(Spec)
