import curry from './curry'

const getWithTheme = mapFn => curry((key, props) => mapFn(props)[key])

export default getWithTheme
