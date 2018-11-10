import setting from './setting'
import basicTheme from '../test/theme'
import pipe from '../utils/pipe'

test('builds base values', () => {
  const result = pipe(setting)(basicTheme)

  expect(result).toEqual({
    '--base-font-size': '16px',
    '--base-line-height': '18.4px',
    '--base-spacing': '16px',
    '--color_lt-grey': '#bfd7ea',
    '--color_primary': '#0b3954',
    '--color_secondary': '#ff6663',
    '--font-face_andale -mono': 'Andale Mono',
    '--font-face_arial -black': 'Arial Black',
    '--font-face_helvetica': 'Helvetica',
    '--font-family_body': 'Helvetica',
    '--font-family_code': 'Andale Mono',
    '--font-family_title': 'Helvetica',
    '--font-weight_dk': '700',
    '--font-weight_lt': '300',
    '--font-weight_md': '500',
    '--spacing_lg': '24px',
    '--spacing_md': '16px',
    '--spacing_sm': '8px',
    '--swatch_pale aqua': '#bfd7ea',
    '--swatch_pastel red': '#ff6663',
    '--swatch_prussian blue': '#0b3954'
  })
})
