import React, { Fragment } from 'react'
import { compose } from 'redux'
import { castNumber } from '@airtheme/core'
import {
  withBaseFontSizeContent,
  withBaseLineHeightContent
} from '@airtheme/make'
import { IncrementUnit, InputUnitValue, InputUnitName } from '@airtheme/ui'
import EditForm from '../../components/EditForm'
import EditBaseLineHeight from './EditBaseLineHeight'
import EditBaseFontSize from './EditBaseFontSize'

const BaseFontSizeInput = withBaseFontSizeContent(
  ({ updateBaseFontSize, content }) => (
    <InputUnitName disabled update={updateBaseFontSize} unit={content} />
  )
)

const BaseLineHeightInput = withBaseLineHeightContent(
  ({ updateBaseLineHeight, content }) => (
    <InputUnitName disabled update={updateBaseLineHeight} unit={content} />
  )
)

const Edit = () => (
  <EditForm>
    <EditForm.Name>
      <BaseFontSizeInput />
    </EditForm.Name>
    <EditForm.Units>
      <EditForm.Units.Unit incrementGroup>
        <EditBaseFontSize />
      </EditForm.Units.Unit>
    </EditForm.Units>
    <EditForm.Name>
      <BaseLineHeightInput />
    </EditForm.Name>
    <EditForm.Units>
      <EditForm.Units.Unit incrementGroup>
        <EditBaseLineHeight />
      </EditForm.Units.Unit>
    </EditForm.Units>
    <EditForm.Footer />
  </EditForm>
)

export default Edit
