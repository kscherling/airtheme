import { connect } from 'react-redux'
import {
  mapBaseSpacing,
  mapBaseSpacingContent,
  updateBaseSpacing
} from '@airtheme/make'

export const withBaseSpacingAttribute = connect(mapBaseSpacing)
export const withBaseSpacingContent = connect(
  mapBaseSpacingContent,
  { updateBaseSpacing }
)
