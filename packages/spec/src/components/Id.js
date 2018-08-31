import React from 'react'
import { connect } from 'react-redux'
import { mapId } from '@airtheme/make'
import { printNode } from '../lib/PrintTypes'

const Id = ({ id }) => printNode('id', id)

export default connect(mapId)(Id)
