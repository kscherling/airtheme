//@flow
import type { ThemeST } from '../flow/ThemeTypes'

/**
 * Theme factory for
 */

type ThemeFactoryFn = (args: ThemeST) => ThemeST

const factoryForTheme = (schema: ThemeST): ThemeFactoryFn => (
  factoryProps: ThemeST
): ThemeST => ({ ...schema, ...factoryProps })

export default factoryForTheme
