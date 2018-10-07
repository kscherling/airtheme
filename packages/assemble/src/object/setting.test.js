import setting from './setting'
import pipe, { output } from '../utils/pipe'
import basicTheme from '../test/theme'

test('builds setting values', () => {
  const result = pipe(basicTheme)(setting, output)

  expect(result).toEqual({
    baseFontSize: { baseFontSize: '16px' },
    baseLineHeight: { baseLineHeight: '18.4px' },
    baseSpacing: { baseSpacing: '16px' },
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
