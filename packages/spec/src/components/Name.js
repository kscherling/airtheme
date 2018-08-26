import React from 'react'
import { connect } from 'react-redux'

const Name = ({ name }) => name

export default connect(({ theme: { name } }) => ({
  name
}))(Name)
