import setting from './setting'
import basicTheme from '../test/theme'
import pipe from '../utils/pipe'

test('builds settings values', () => {
  const result = pipe(setting)(basicTheme)

  expect(result).toEqual({
    '$setting__color_lt-grey': '#bfd7ea',
    $setting__color_primary: '#0b3954',
    $setting__color_secondary: '#ff6663',
    '$setting__font-face_andale-mono': 'Andale Mono',
    '$setting__font-face_arial-black': 'Arial Black',
    '$setting__font-face_helvetica': 'Helvetica',
    '$setting__font-family_body': 'Helvetica',
    '$setting__font-family_code': 'Andale Mono',
    '$setting__font-family_title': 'Helvetica',
    '$setting__font-size_lg': '17.6px',
    '$setting__font-size_md': '16px',
    '$setting__font-size_sm': '14.4px',
    '$setting__font-weight_dk': '700',
    '$setting__font-weight_lt': '300',
    '$setting__font-weight_md': '500',
    $setting__spacing_lg: '24px',
    $setting__spacing_md: '16px',
    $setting__spacing_sm: '8px'
  })
})
