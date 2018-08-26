import React from 'react'
import { connect } from 'react-redux'

const Type = ({ type }) => type

export default connect(({ theme: { type } }) => ({
  type
}))(Type)
