import pipe from '../utils/pipe'
import setting from './setting'
import base from './base'

// TODO: Figure out why returning curried fn directly doesn't work...

const index = pipe(
  base,
  setting
)

export default index
