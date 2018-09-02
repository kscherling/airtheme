import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseFontSizeContent,
  SimpleList
} from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const BaseFontSizeAttribute = connect(mapBaseFontSize)(({ baseFontSize }) => (
  <Attribute attribute={baseFontSize} />
))
const BaseFontSizeContent = connect(mapBaseFontSizeContent)(({ content }) => (
  <AttributeContent content={content} />
))

const BaseFontSize = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Base Font Size</SimpleList.Header>
    <BaseFontSizeAttribute />
    <BaseFontSizeContent />
  </SimpleList.OneColumn>
)

export default BaseFontSize
