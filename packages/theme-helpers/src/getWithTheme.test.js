import {
  baseFontSize,
  baseLineHeight,
  baseSpacing,
  color,
  fontFace,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  swatch
} from './getWithTheme'
import theme from './test/theme'

const props = { theme }

const expectThemePropValue = (name, resultValue, expectedValue) =>
  test(name, () => expect(resultValue).toBe(expectedValue))

expectThemePropValue('#baseFontSize', baseFontSize(props), theme.baseFontSize)
expectThemePropValue('#baseLineHeight', baseLineHeight(props), theme.baseLineHeight) // prettier-ignore
expectThemePropValue('#baseSpacing', baseSpacing(props), theme.baseSpacing)
expectThemePropValue('#swatch', swatch('white', props), theme.swatch.white)
expectThemePropValue('#fontFace', fontFace('helvetica', props), theme.fontFace.helvetica) // prettier-ignore
expectThemePropValue('#color', color('sm', props), theme.setting.color.sm)
expectThemePropValue('#fontFamily', fontFamily('title', props), theme.setting.fontFamily.title) // prettier-ignore
expectThemePropValue('#fontSize', fontSize('md', props), theme.setting.fontSize.md) // prettier-ignore
expectThemePropValue('#fontWeight', fontWeight('md', props), theme.setting.fontWeight.md) // prettier-ignore
expectThemePropValue('#spacing', spacing('md', props), theme.setting.spacing.md) // prettier-ignore
