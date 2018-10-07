import { connect } from 'react-redux'
import { mapBaseSpacing, mapBaseSpacingContent } from '../mapStateToProps'
import { updateBaseSpacing } from '../../action'

export const withBaseSpacingAttribute = connect(mapBaseSpacing)
export const withBaseSpacingContent = connect(
  mapBaseSpacingContent,
  { updateBaseSpacing }
)
