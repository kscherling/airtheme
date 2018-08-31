import React from 'react'
import { connect } from 'react-redux'
import { mapColor, mapColorContent, SimpleList } from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const ColorAttribute = connect(mapColor)(({ color }) => (
  <Attribute attribute={color} />
))
const ColorContent = connect(mapColorContent)(({ content }) => (
  <AttributeContent content={content} />
))

const Color = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Color</SimpleList.Header>
    <ColorAttribute />
    <ColorContent />
  </SimpleList.OneColumn>
)

export default Color
