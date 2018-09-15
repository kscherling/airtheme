import { connect } from 'react-redux'
import { mapBaseLineHeight, mapBaseLineHeightContent } from '../mapStateToProps'
import { updateBaseLineHeightView, updateBaseLineHeight } from '../../action'

export const withBaseLineHeightAttribute = connect(
  mapBaseLineHeight,
  { updateBaseLineHeightView }
)

export const withBaseLineHeightContent = connect(
  mapBaseLineHeightContent,
  { updateBaseLineHeight }
)
