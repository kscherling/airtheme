import { connect } from 'react-redux'
import {
  mapBaseFontSize,
  mapBaseFontSizeContent,
  updateBaseFontSize
} from '@airtheme/make'

export const withBaseFontSizeAttribute = connect(mapBaseFontSize)
export const withBaseFontSizeContent = connect(
  mapBaseFontSizeContent,
  { updateBaseFontSize }
)
