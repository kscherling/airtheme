import React from 'react'
import styled from 'styled-components'
import AirthemeSpec from '@airtheme/spec'
import { connect } from 'react-redux'
import { updateTheme } from '@airtheme/make'
import { bindActionCreators } from 'redux'

const Container = styled.div`
  background: #ccc;
`

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators({ updateTheme }, dispatch)
  return { actions }
}

const Spec = ({ theme }) => {
  return (
    <Container>
      {theme.name}
      <AirthemeSpec />
    </Container>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spec)
