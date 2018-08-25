import { attribute } from '@airtheme/type'

const baseSetting = {
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
}

export const withBaseSetting = ({ ...args }) => ({ ...baseSetting, ...args })

export default baseSetting
