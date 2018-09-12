import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { SimpleList } from '@airtheme/ui'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'
import {
  withBaseLineHeightContent,
  withBaseLineHeightAttribute
} from '../connector/BaseLineHeight'

const BaseLineHeightAttribute = withBaseLineHeightAttribute(
  ({ baseLineHeight: { view, viewable }, updateBaseLineHeightView }) => (
    <Attribute
      view={view}
      viewable={viewable}
      updateView={updateBaseLineHeightView}
    />
  )
)

const BaseLineHeightContent = withBaseLineHeightContent(
  ({ content, updateBaseLineHeight }) => (
    <Fragment>
      <AttributeBaseContent content={content} update={updateBaseLineHeight} />
    </Fragment>
  )
)

const BaseLineHeight = () => (
  <SimpleList.OneColumn>
    <BaseLineHeightAttribute />
    <BaseLineHeightContent />
  </SimpleList.OneColumn>
)

export default BaseLineHeight
