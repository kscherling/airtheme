import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
    value: '',
    ordinal: '',
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({ name: value })
  }

  handleValueChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  handleOrdinalChange = ({ target: { value } }) => {
    this.setState({ ordinal: value })
  }

  handleSubmit = () => {
    const { name, value, ordinal } = this.state
    const { add, nextOrdinal } = this.props

    add(value, name, nextOrdinal)
    this.setState({
      name: '',
      value: '',
      ordinal: ''
    })
  }

  render() {
    const { name, value, ordinal } = this.state

    return (
      <Container>
        <input type="text" placeholder='name' value={name} onChange={this.handleNameChange} />
        <input type="text" placeholder='value' value={value} onChange={this.handleValueChange} />
        <input type="text" placeholder='ordinal' value={ordinal} onChange={this.handleOrdinalChange} />
        <button type="button" onClick={this.handleSubmit}>
          add
        </button>
      </Container>
    )
  }
}

export default AddForm
