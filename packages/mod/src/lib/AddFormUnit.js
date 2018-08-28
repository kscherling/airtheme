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

class AddFormUnit extends Component {
  state = {
    name: '',
    value: ''
  }

  handleNameChange = ({ target: { value } }) => {
    this.props.update(this.props.unit, { ...this.props.unit, name: value })
  }

  handleValueChange = ({ target: { value } }) => {
    this.props.update(this.props.unit, { ...this.props.unit, value })
  }

  handleOrdinalChange = ({ target: { value } }) => {
    this.props.update(this.props.unit, { ...this.props.unit, ordinal: value })
  }

  handleRemove = () => {
    this.props.remove(this.props.unit)
  }

  render() {
    const { unit } = this.props

    return (
      <Container>
        <input type="text" value={unit.name} onChange={this.handleNameChange} />
        <input
          type="text"
          value={unit.value}
          onChange={this.handleValueChange}
        />
        <button type="button" onClick={this.handleRemove}>
          remove
        </button>
      </Container>
    )
  }
}

export default AddFormUnit
