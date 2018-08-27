import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-flow: row;
  grid-gap: 0.75rem;

  ${({ shade }) =>
    shade &&
    css`
      background: #f2f2f2;
    `};

  margin-bottom: 1rem;
`

class AddForm extends Component {
  state = {
    name: '',
    value: ''
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({ name: value })
  }

  handleValueChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.add(this.state)
  }

  render() {
    const { name, value } = this.state

    return (
      <Container>
        <input type="text" value={name} onChange={this.handleNameChange} />
        <input type="text" value={value} onChange={this.handleValueChange} />
        <button type="button" onClick={this.handleSubmit}>
          add
        </button>
      </Container>
    )
  }
}

export default AddForm
