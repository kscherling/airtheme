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

assertStyleRule(background, 'primary', 'background', '#0b3954')
assertStyleRule(backgroundColor, 'primary', 'background-color', '#0b3954')
assertStyleRule(borderBottomColor, 'primary', 'border-bottom-color', '#0b3954')
assertStyleRule(borderBottomLeftRadius, 'sm', 'border-bottom-left-radius', '3px', true) // prettier-ignore
assertStyleRule(borderBottomRightRadius, 'sm', 'border-bottom-right-radius', '3px', true) // prettier-ignore
assertStyleRule(borderColor, 'primary', 'border-color', '#0b3954')
assertStyleRule(borderLeftColor, 'primary', 'border-left-color', '#0b3954')
assertStyleRule(borderRadius, 'sm', 'border-radius', '3px', true)
assertStyleRule(borderRightColor, 'primary', 'border-right-color', '#0b3954') // prettier-ignore
assertStyleRule(borderTopColor, 'primary', 'border-top-color', '#0b3954')
assertStyleRule(borderTopLeftRadius, 'sm', 'border-top-left-radius', '3px', true) // prettier-ignore
assertStyleRule(borderTopRightRadius, 'sm', 'border-top-right-radius', '3px', true) // prettier-ignore
assertStyleRule(bottom, 'md', 'bottom', '16px')
assertStyleRule(boxShadow, '', '', '', true)
assertStyleRule(caretColor, 'primary', 'caret-color', '#0b3954')
assertStyleRule(color, 'primary', 'color', '#0b3954')
assertStyleRule(fontFamily, 'title', 'font-family', 'Helvetica')
assertStyleRule(fontSize, 'sm', 'font-size', '14.4px')
assertStyleRule(fontWeight, 'lt', 'font-weight', '300')
assertStyleRule(gridColumnGap, 'md', 'grid-column-gap', '16px')
assertStyleRule(gridGap, 'md', 'grid-gap', '16px')
assertStyleRule(gridRowGap, 'md', 'grid-row-gap', '16px')
assertStyleRule(height, 'md', 'height', '16px')
assertStyleRule(left, 'md', 'left', '16px')
assertStyleRule(lineHeight, '', '', '', true)
assertStyleRule(margin, 'md', 'margin', '16px')
assertStyleRule(marginBottom, 'md', 'margin-bottom', '16px')
assertStyleRule(marginLeft, 'md', 'margin-left', '16px')
assertStyleRule(marginRight, 'md', 'margin-right', '16px')
assertStyleRule(marginTop, 'md', 'margin-top', '16px')
assertStyleRule(maxHeight, 'md', 'max-height', '16px')
assertStyleRule(maxWidth, 'md', 'max-width', '16px')
assertStyleRule(minHeight, 'md', 'min-height', '16px')
assertStyleRule(minWidth, 'md', 'min-width', '16px')
assertStyleRule(opacity, '', '', '', true)
assertStyleRule(outlineColor, 'primary', 'outline-color', '#0b3954')
assertStyleRule(padding, 'md', 'padding', '16px')
assertStyleRule(paddingBottom, 'md', 'padding-bottom', '16px')
assertStyleRule(paddingLeft, 'md', 'padding-left', '16px')
assertStyleRule(paddingRight, 'md', 'padding-right', '16px')
assertStyleRule(paddingTop, 'md', 'padding-top', '16px')
assertStyleRule(right, 'md', 'right', '16px')
assertStyleRule(top, 'md', 'top', '16px')
assertStyleRule(width, 'md', 'width', '16px')
assertStyleRule(zIndex, '', '', '', true)

assertStyleRule(noop, '', '', '', true)
