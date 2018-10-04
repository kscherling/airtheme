import { css } from 'styled-components'
import mapForAttr from './mapForAttr'

const cssForAttr = cssAttr =>
  curry((key, props) => {
    return css`
      ${cssAttr}: ${mapForAttr[cssAttr](props)};
    `
  })

export default cssForAttr
