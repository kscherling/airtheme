import React from 'react'
import { connect } from 'react-redux'
import { mapColor, mapColorContent } from '@airtheme/make'
import { SimpleList } from '@airtheme/ui'
import { Attribute, AttributeContent } from '../components/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

const ColorAttribute = connect(mapColor)(({ color }) => (
  <Attribute attribute={color} />
))
const ColorContent = connect(mapColorContent)(({ content }) => (
  <AttributeContent content={content} />
))

const Color = () => (
  <AttributeGroup>
    <ColorAttribute />
    <ColorContent />
  </AttributeGroup>
)

export default Color
