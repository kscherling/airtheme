import {
  BASE_LINE_HEIGHT,
  BASE_FONT_SIZE_PATH,
  PX,
  FACTOR
} from '@airtheme/core'
import unit from '../../unit'

export default {
  view: PX,
  viewable: [FACTOR, PX],
  reference: BASE_FONT_SIZE_PATH,
  object: BASE_LINE_HEIGHT,
  unit: FACTOR,
  content: unit.factor({ name: 'baseLineHeight', value: 1.15 })
}
