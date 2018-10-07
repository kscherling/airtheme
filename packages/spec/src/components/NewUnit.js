import React, { Component } from 'react'
import { noop } from '@airtheme/core'

class NewUnit extends Component {
  static defaultProps = {
    unit: noop,
    attribute: noop,
    unitDefaults: {},
    nextOrdinal: null,
    render: noop
  }

  constructor(props) {
    super(props)

    this.state = props.unit(props.unitDefaults)
  }

  updateName = name => this.setState({ name })
  updateValue = value => this.setState({ value })

  render() {
    const { render, attribute } = this.props
    const { state: unit, updateName, updateValue } = this

    return render({
      attribute: attribute({ content: [unit] }),
      unit,
      updateName,
      updateValue
    })
  }
}

export default NewUnit
