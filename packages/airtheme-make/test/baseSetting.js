import { attribute } from '@airtheme/airtheme-type'

const baseSetting = {
  color: attribute.color(),
  fontFamily: {},
  fontSize: attribute.fontSize(),
  fontWeight: {},
  spacing: {}
}

export const withBaseSetting = ({ ...args }) => ({ ...baseSetting, ...args })

export default baseSetting
