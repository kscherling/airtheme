//@flow
import type {
  ThemeST,
  ThemeFactoryOptions,
  ThemeFactoryInstance
} from '../flow/ThemeTypes'

/**
 * @name factoryForTheme
 * Theme factory for
 */

const factoryForTheme = (schema: ThemeST) => (options: ThemeFactoryOptions) =>
  ({ ...schema, ...options }: ThemeFactoryInstance)

export default factoryForTheme
