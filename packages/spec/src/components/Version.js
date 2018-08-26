import React from 'react'
import { connect } from 'react-redux'

const Version = ({ version }) => version

export default connect(({ theme: { version } }) => ({
  version
}))(Version)
