import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  grid-gap: 0.75rem;

  ${({ shade }) =>
    shade &&
    css`
      background: #f2f2f2;
    `};

  margin-bottom: 1rem;
`

class AddFormUnit extends Component {
  state = {
    name: '',
    value: '',
    ordinal: '',
  }

  handleNameChange = ({ target: { value } }) => {
    this.props.update(this.props.unit, { name: value })
  }

  handleValueChange = ({ target: { value } }) => {
    this.props.update(this.props.unit, { value })
  }

  handleOrdinalChange = ({ target: { value } }) => {
    this.props.update(this.props.unit, { ordinal: value })
  }

  handleRemove = () => {
    this.props.remove(this.props.unit)
  }

  render() {
    const { unit: { name, value, ordinal }} = this.props

    return (
      <Container>
        <input type="text" value={name} onChange={this.handleNameChange} />
        <input
          type="text"
          value={value}
          onChange={this.handleValueChange}
        />
        <input
          type="text"
          value={ordinal}
          onChange={this.handleOrdinalChange}
        />
        <button type="button" onClick={this.handleRemove}>
          remove
        </button>
      </Container>
    )
  }
}

export default AddFormUnit
