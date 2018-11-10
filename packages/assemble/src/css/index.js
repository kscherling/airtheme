import pipe from '../utils/pipe'
import setting from './setting'

// TODO: Figure out why returning curried fn directly doesn't work...

const index = data => pipe(setting)(data)

export default index
