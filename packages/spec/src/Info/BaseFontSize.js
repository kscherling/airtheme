import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseFontSizeContent,
  SimpleList
} from '@airtheme/make'
import { Attribute, AttributeContent } from '../components/PrintTypes'
import AttributeGroup from '../components/AttributeGroup'

const BaseFontSizeAttribute = connect(mapBaseFontSize)(({ baseFontSize }) => (
  <Attribute attribute={baseFontSize} />
))
const BaseFontSizeContent = connect(mapBaseFontSizeContent)(({ content }) => (
  <AttributeContent content={content} />
))

const BaseFontSize = () => (
  <AttributeGroup>
    <BaseFontSizeAttribute />
    <BaseFontSizeContent />
  </AttributeGroup>
)

export default BaseFontSize
