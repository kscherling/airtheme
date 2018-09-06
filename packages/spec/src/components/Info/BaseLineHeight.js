import React from 'react'
import { connect } from 'react-redux'
import {
  mapBaseLineHeight,
  mapBaseLineHeightContent,
  SimpleList
} from '@airtheme/make'
import { Attribute, AttributeContent } from '../../lib/PrintTypes'
import AttributeGroup from '../../lib/AttributeGroup'

const BaseLineHeightAttribute = connect(mapBaseLineHeight)(
  ({ baseLineHeight }) => <Attribute attribute={baseLineHeight} />
)
const BaseLineHeightContent = connect(mapBaseLineHeightContent)(
  ({ content }) => <AttributeContent content={content} />
)

const BaseLineHeight = () => (
  <AttributeGroup>
    <BaseLineHeightAttribute />
    <BaseLineHeightContent />
  </AttributeGroup>
)

export default BaseLineHeight
