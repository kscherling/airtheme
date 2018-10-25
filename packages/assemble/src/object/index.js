import pipe from '../utils/pipe'
import setting from './setting'
import meta from './meta'

const index = pipe(
  meta,
  setting
)

export default index
