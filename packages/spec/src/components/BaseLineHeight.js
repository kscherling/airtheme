import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseLineHeight,
  mapBaseLineHeightContent,
  SimpleList
} from '@airtheme/make'
import { Attribute, AttributeContent } from '../lib/PrintTypes'

const BaseLineHeightAttribute = connect(mapBaseLineHeight)(
  ({ baseLineHeight }) => <Attribute attribute={baseLineHeight} />
)
const BaseLineHeightContent = connect(mapBaseLineHeightContent)(
  ({ content }) => <AttributeContent content={content} />
)

const BaseLineHeight = () => (
  <SimpleList.OneColumn>
    <SimpleList.Header>Base Line Height</SimpleList.Header>
    <BaseLineHeightAttribute />
    <BaseLineHeightContent />
  </SimpleList.OneColumn>
)

export default BaseLineHeight
