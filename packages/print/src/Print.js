import React from 'react'
import { connect } from 'react-redux'
import { mapTheme } from '@airtheme/make'
import Pretty from './Pretty'
import assemble from '@airtheme/assemble'

const Print = ({ theme }) => <Pretty data={assemble.object(theme)} />

export default connect(mapTheme)(Print)
