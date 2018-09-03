import pipe from '../utils/pipe'
import setting from './setting'
import meta from './meta'

const index = theme => pipe(theme)(meta, setting)

export default index
