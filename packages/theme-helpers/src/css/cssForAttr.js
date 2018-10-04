import { css } from 'styled-components'
import mapForAttr from './mapForAttr'
import curry from './curry'
import warning from 'warning'

const cssForAttr = cssAttr =>
  curry((key, props) => {
    warning(props.theme, `Missing required prop theme in '${props}'`)

    warning(mapForAttr[cssAttr], `Missing map function for '${cssAttr}'`)

    warning(
      mapForAttr[cssAttr](props),
      `Map function for ${cssAttr} returned falsey`
    )

    warning(
      mapForAttr[cssAttr](props)[key],
      `Missing setting ${key} in ${mapForAttr[cssAttr](props)}`
    )

    return css`
      ${cssAttr}: ${mapForAttr[cssAttr](props)[key]};
    `
  })

export default cssForAttr
