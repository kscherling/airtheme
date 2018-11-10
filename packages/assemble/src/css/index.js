import pipe from '../utils/pipe'

// TODO: Figure out why returning curried fn directly doesn't work...

const index = data => pipe()(data)

export default index
