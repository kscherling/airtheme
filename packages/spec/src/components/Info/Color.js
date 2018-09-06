import React from 'react'
import { connect } from 'react-redux'
import { mapColor, mapColorContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../../lib/PrintTypes'
import AttributeGroup from '../../lib/AttributeGroup'

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
