import { cleanup } from 'react-testing-library'
import assertStyleRule from './test/assertStyleRule'
import {
  background,
  backgroundColor,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderColor,
  borderLeftColor,
  borderRadius,
  borderRightColor,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  bottom,
  boxShadow,
  caretColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  gridGap,
  gridColumnGap,
  gridRowGap,
  height,
  left,
  lineHeight,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  outlineColor,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
  right,
  top,
  width,
  zIndex
} from './cssFor'
const noop = () => null

afterEach(cleanup)

assertStyleRule(backgroundColor, 'primary', 'background-color', '#0b3954')
assertStyleRule(background, 'primary', 'background', '#0b3954')
assertStyleRule(borderBottomColor, 'primary', 'border-bottom-color', '#0b3954')
assertStyleRule(borderBottomLeftRadius, 'sm', 'border-bottom-left-radius', '3px', true) // prettier-ignore
assertStyleRule(borderBottomRightRadius, 'sm', 'border-bottom-right-radius', '3px', true) // prettier-ignore
assertStyleRule(borderColor, 'primary', 'border-color', '#0b3954')
assertStyleRule(borderLeftColor, 'primary', 'border-left-color', '#0b3954')
assertStyleRule(borderRadius, 'sm', 'border-radius', '3px', true)
assertStyleRule(borderRightColor, 'primary', 'border-right-color', '#0b3954') // prettier-ignore
assertStyleRule(borderTopColor, 'primary', 'border-top-color', '#0b3954')
assertStyleRule(borderTopLeftRadius, '', '', '', true)
assertStyleRule(borderTopRightRadius, '', '', '', true)
assertStyleRule(bottom, '', '', '', true)
assertStyleRule(boxShadow, '', '', '', true)
assertStyleRule(caretColor, 'primary', 'caret-color', '#0b3954')
assertStyleRule(color, 'primary', 'color', '#0b3954')
assertStyleRule(fontFamily, '', '', '', true)
assertStyleRule(fontSize, '', '', '', true)
assertStyleRule(fontWeight, '', '', '', true)
assertStyleRule(gridGap, '', '', '', true)
assertStyleRule(gridColumnGap, '', '', '', true)
assertStyleRule(gridRowGap, '', '', '', true)
assertStyleRule(height, '', '', '', true)
assertStyleRule(left, '', '', '', true)
assertStyleRule(lineHeight, '', '', '', true)
assertStyleRule(marginBottom, '', '', '', true)
assertStyleRule(marginLeft, '', '', '', true)
assertStyleRule(marginRight, '', '', '', true)
assertStyleRule(marginTop, '', '', '', true)
assertStyleRule(margin, '', '', '', true)
assertStyleRule(maxHeight, '', '', '', true)
assertStyleRule(maxWidth, '', '', '', true)
assertStyleRule(minHeight, '', '', '', true)
assertStyleRule(minWidth, '', '', '', true)
assertStyleRule(opacity, '', '', '', true)
assertStyleRule(outlineColor, 'primary', 'outline-color', '#0b3954')
assertStyleRule(paddingBottom, '', '', '', true)
assertStyleRule(paddingLeft, '', '', '', true)
assertStyleRule(paddingRight, '', '', '', true)
assertStyleRule(paddingTop, '', '', '', true)
assertStyleRule(padding, '', '', '', true)
assertStyleRule(right, '', '', '', true)
assertStyleRule(top, '', '', '', true)
assertStyleRule(width, '', '', '', true)
assertStyleRule(zIndex, '', '', '', true)

assertStyleRule(noop, '', '', '', true)
