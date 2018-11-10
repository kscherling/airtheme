//@flow
import type {
  SettingST,
  SettingFactoryOptions,
  SettingFactoryInstance
} from '../flow/SettingTypes'

/**
 * @name factoryForSetting
 * Setting factory for
 */

const factoryForSetting = (schema: SettingST) => (
  options: SettingFactoryOptions
) => ({ ...schema, ...options }: SettingFactoryInstance)

export default factoryForSetting
