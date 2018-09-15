import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { SimpleList } from '@airtheme/ui'
import { AttributeBaseContent, Attribute } from '../lib/ModifyTypes'
import {
  withBaseFontSizeAttribute,
  withBaseFontSizeContent
} from '@airtheme/make'

const BaseFontSizeAttribute = withBaseFontSizeAttribute(
  ({ baseFontSize: { view, viewable } }) => (
    <Attribute view={view} viewable={viewable} />
  )
)

const BaseFontSizeContent = withBaseFontSizeContent(
  ({ content, updateBaseFontSize }) => (
    <Fragment>
      <AttributeBaseContent content={content} update={updateBaseFontSize} />
    </Fragment>
  )
)

const BaseFontSize = () => (
  <SimpleList.OneColumn>
    <BaseFontSizeAttribute />
    <BaseFontSizeContent />
  </SimpleList.OneColumn>
)

export default BaseFontSize
