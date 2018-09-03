import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseFontSizeContent,
  SimpleList
} from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'
import AttributeGroup from '../lib/AttributeGroup'

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