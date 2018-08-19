import { FONT_SIZE } from '../../../constants/attributeTypes'
import { FACTOR, PX, REM } from '../../../constants/unitTypes'
import { BASE_FONT_SIZE_KEY } from '../../../constants/themeKeys'

export default {
  display: FACTOR,
  displays: [FACTOR, PX, REM],
  reference: BASE_FONT_SIZE_KEY,
  type: FONT_SIZE,
  unit: FACTOR
}
