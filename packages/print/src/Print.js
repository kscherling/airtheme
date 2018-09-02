import React from 'react'
import { connect } from 'react-redux'
import { mapTheme } from '@airtheme/make'
import Pretty from './Pretty'

const Print = ({ theme }) => <Pretty data={theme} />

export default connect(mapTheme)(Print)
