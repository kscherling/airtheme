import { attribute, setting } from '@airtheme/type'

const baseSetting = setting.base()

export const withBaseSetting = ({ ...args }) => ({ ...baseSetting, ...args })

export default baseSetting
