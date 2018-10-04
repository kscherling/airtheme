import { css } from 'styled-components'
import mapForAttr from './mapForAttr'
import curry from './curry'
import invariant from 'invariant'

const cssForAttr = cssAttr =>
  curry((key, props) => {
    invariant(props.theme, `Missing required prop theme in '${props}'`)

    invariant(mapForAttr[cssAttr], `Missing map function for '${cssAttr}'`)

    invariant(
      mapForAttr[cssAttr](props),
      `Map function for ${cssAttr} returned falsey`
    )

    invariant(
      mapForAttr[cssAttr](props)[key],
      `Missing setting ${key} in ${mapForAttr[cssAttr](props)}`
    )

    return css`
      ${cssAttr}: ${mapForAttr[cssAttr](props)[key]};
    `
  })

export default cssForAttr
