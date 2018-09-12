import React from 'react'
import { connect } from 'react-redux'
import { Node } from '../../lib/PrintTypes'
import { SimpleList } from '@airtheme/ui'
import { mapId, mapName, mapVersion } from '@airtheme/make'

const Id = connect(mapId)(({ id }) => (
  <SimpleList.TwoColumns>
    <Node name="id" val={id} />
  </SimpleList.TwoColumns>
))
const Name = connect(mapName)(({ name }) => (
  <SimpleList.TwoColumns>
    <Node name="name" val={name} />
  </SimpleList.TwoColumns>
))
const Version = connect(mapVersion)(({ version }) => (
  <SimpleList.TwoColumns>
    <Node name="version" val={version} />
  </SimpleList.TwoColumns>
))

const Globals = () => (
  <SimpleList>
    <Id />
    <Name />
    <Version />
  </SimpleList>
)

export default Globals
