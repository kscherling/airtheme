// @flow

import curry from './curry'

/**
 *
 */

const getWithTheme = (mapFn: ({ theme: {} }) => {}) =>
  curry((mapFn: ({ theme: {} }) => {}) => (key: string, props: { theme: {} }) =>
    mapFn(props)[key]
  )

export default getWithTheme
