import pipe from '../utils/pipe'
import setting from './setting'
import meta from './meta'

// TODO: Figure out why returning curried fn directly doesn't work...

const index = data =>
  pipe(
    setting,
    meta
  )(data)

export default index
