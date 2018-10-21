//@flow
import type {
  ThemeST,
  ThemeFactoryOptions,
  ThemeFactoryResult
} from '../flow/ThemeTypes'

/**
 * @name factoryForTheme
 * Theme factory for
 */

const factoryForTheme = (schema: ThemeST) => (options: ThemeFactoryOptions) =>
  ({ ...schema, ...options }: ThemeFactoryResult)

export default factoryForTheme
