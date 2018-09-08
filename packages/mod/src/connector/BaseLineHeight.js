import { connect } from 'react-redux'
import {
  mapBaseLineHeight,
  mapBaseLineHeightContent,
  updateBaseLineHeightView,
  updateBaseLineHeight
} from '@airtheme/make'

export const withBaseLineHeightAttribute = connect(
  mapBaseLineHeight,
  { updateBaseLineHeightView }
)

export const withBaseLineHeightContent = connect(
  mapBaseLineHeightContent,
  { updateBaseLineHeight }
)
