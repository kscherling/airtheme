// @flow

import { css } from 'styled-components'
import mapForAttr from './mapForAttr'
import curry from './curry'
import invariant from 'invariant'
import getWithTheme from './getWithTheme'

/**
 * Description
 */

const cssForAttr = (cssAttr: string) =>
  curry((key: string, props: { theme: {} }) => {
    return css`
      ${cssAttr}: ${getWithTheme(mapForAttr[cssAttr])(key, props)};
    `
  })

export default cssForAttr
