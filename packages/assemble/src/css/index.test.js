import assemble from '../index'
import basicTheme from '../test/theme'
import { VERSION } from '@airtheme/core'

test('builds css custom attributes from settings', () => {
  const result = assemble.css(basicTheme)

  expect(result).toEqual({
    '--base-font-size': '16px',
    '--base-line-height': 1.25,
    '--base-spacing': '16px',
    '--color_brand-primary': '#61e8e1',
    '--color_brand-secondary': '#f2cd60',
    '--color_text': '#000000',
    '--color_text-muted': '#999999',
    '--font-family_body': 'san-serif',
    '--font-family_code': 'monospace',
    '--font-family_emphasis': 'san-serif',
    '--font-family_headline': 'serif',
    '--font-size_lg': '1.25rem',
    '--font-size_reg': '1rem',
    '--font-size_sm': '0.9rem',
    '--font-size_xl': '1.75rem',
    '--font-size_xs': '0.75rem',
    '--font-size_xxl': '2rem',
    '--font-size_xxxl': '2.5rem',
    '--font-weight_dk': 700,
    '--font-weight_lt': 300,
    '--font-weight_reg': 400,
    '--spacing_lg': '64px',
    '--spacing_md': '32px',
    '--spacing_sm': '16px',
    '--spacing_xs': '8px'
  })

  expect(true).toEqual(true)
})
