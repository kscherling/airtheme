import setting from './setting'
import pipe from '../utils/pipe'
import basicTheme from '../test/theme'

test('builds setting values', () => {
  const result = pipe(setting)(basicTheme)

  expect(result).toEqual({
    baseFontSize: '16px',
    baseLineHeight: '18.4px',
    baseSpacing: '16px',
    fontFace: {
      'Andale Mono': 'Andale Mono',
      'Arial Black': 'Arial Black',
      Helvetica: 'Helvetica'
    },
    swatch: {
      'pale aqua': '#bfd7ea',
      'pastel red': '#ff6663',
      'prussian blue': '#0b3954'
    },
    setting: {
      color: { ltGrey: '#bfd7ea', primary: '#0b3954', secondary: '#ff6663' },
      fontFamily: {
        body: 'Helvetica',
        code: 'Andale Mono',
        title: 'Helvetica'
      },
      fontSize: { lg: '17.6px', md: '16px', sm: '14.4px' },
      fontWeight: { dk: '700', lt: '300', md: '500' },
      spacing: { lg: '24px', md: '16px', sm: '8px' }
    }
  })

  expect(true).toEqual(true)
})
