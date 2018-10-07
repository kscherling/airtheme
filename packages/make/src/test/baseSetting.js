import { attribute } from '@airtheme/type'
import { settingSchema } from '@airtheme/type'

const baseSetting = {
  object: settingSchema.object,
  color: attribute.color(),
  fontFamily: attribute.fontFamily(),
  fontSize: attribute.fontSize(),
  fontWeight: attribute.fontWeight(),
  spacing: attribute.spacing()
}

export const withBaseSetting = ({ ...args }) => ({ ...baseSetting, ...args })

export default baseSetting
