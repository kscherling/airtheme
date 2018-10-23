import { cleanup } from 'react-testing-library'
import * as ifCss from './ifCss'
import assertStyleRuleIf from './test/assertStyleRuleIf'

afterEach(cleanup)
beforeEach(() => {
  spyOn(console, 'error')
})

assertStyleRuleIf(ifCss.ifBackgroundColor, 'backgroundColor', 'primary', 'background-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBackground, 'background', 'primary', 'background', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderBottomColor, 'borderBottomColor', 'primary', 'border-bottom-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderBottomLeftRadius, 'borderBottomLeftRadius', 'sm', 'border-bottom-left-radius', '3px', true) // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderBottomRightRadius, 'borderBottomRightRadius', 'sm', 'border-bottom-right-radius', '3px', true) // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderColor, 'borderColor', 'primary', 'border-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderLeftColor, 'borderLeftColor', 'primary', 'border-left-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderRadius, 'borderRadius','sm', 'border-radius', '3px', true) // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderRightColor, 'borderRightColor','primary', 'border-right-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderTopColor, 'borderTopColor','primary', 'border-top-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderTopLeftRadius, 'borderTopLeftRadius','sm', 'border-top-left-radius', '3px', true) // prettier-ignore
assertStyleRuleIf(ifCss.ifBorderTopRightRadius, 'borderTopRightRadius', 'sm', 'border-top-right-radius', '3px', true) // prettier-ignore
assertStyleRuleIf(ifCss.ifBottom, 'bottom', 'md', 'bottom', '16px')
assertStyleRuleIf(ifCss.ifBoxShadow, 'boxShadow', '', '', '', true)
assertStyleRuleIf(ifCss.ifCaretColor, 'caretColor', 'primary', 'caret-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifColor, 'color', 'primary', 'color', '#0b3954')
assertStyleRuleIf(ifCss.ifFontFamily, 'fontFamily','title', 'font-family', 'Helvetica') // prettier-ignore
assertStyleRuleIf(ifCss.ifFontSize, 'fontSize', 'sm', 'font-size', '14.4px')
assertStyleRuleIf(ifCss.ifFontWeight, 'fontWeight', 'lt', 'font-weight', '300')
assertStyleRuleIf(ifCss.ifGridColumnGap, 'gridColumnGap','md', 'grid-column-gap', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifGridGap, 'gridGap', 'md', 'grid-gap', '16px')
assertStyleRuleIf(ifCss.ifGridRowGap, 'gridRowGap', 'md', 'grid-row-gap', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifHeight, 'height', 'md', 'height', '16px')
assertStyleRuleIf(ifCss.ifLeft, 'left', 'md', 'left', '16px')
assertStyleRuleIf(ifCss.ifLineHeight, 'lineHeight', '', '', '', true)
assertStyleRuleIf(ifCss.ifMargin, 'margin', 'md', 'margin', '16px')
assertStyleRuleIf(ifCss.ifMarginBottom, 'marginBottom', 'md', 'margin-bottom', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifMarginLeft, 'marginLeft', 'md', 'margin-left', '16px')
assertStyleRuleIf(ifCss.ifMarginRight, 'marginRight', 'md', 'margin-right', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifMarginTop, 'marginTop', 'md', 'margin-top', '16px')
assertStyleRuleIf(ifCss.ifMaxHeight, 'maxHeight', 'md', 'max-height', '16px')
assertStyleRuleIf(ifCss.ifMaxWidth, 'maxWidth', 'md', 'max-width', '16px')
assertStyleRuleIf(ifCss.ifMinHeight, 'minHeight', 'md', 'min-height', '16px')
assertStyleRuleIf(ifCss.ifMinWidth, 'minWidth', 'md', 'min-width', '16px')
assertStyleRuleIf(ifCss.ifOpacity, 'opacity', '', '', '', true)
assertStyleRuleIf(ifCss.ifOutlineColor, 'outlineColor', 'primary', 'outline-color', '#0b3954') // prettier-ignore
assertStyleRuleIf(ifCss.ifPadding, 'padding', 'md', 'padding', '16px')
assertStyleRuleIf(ifCss.ifPaddingBottom, 'paddingBottom', 'md', 'padding-bottom', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifPaddingLeft, 'paddingLeft', 'md', 'padding-left', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifPaddingRight, 'paddingRight', 'md', 'padding-right', '16px') // prettier-ignore
assertStyleRuleIf(ifCss.ifPaddingTop, 'paddingTop', 'md', 'padding-top', '16px')
assertStyleRuleIf(ifCss.ifRight, 'right', 'md', 'right', '16px')
assertStyleRuleIf(ifCss.ifTop, 'top', 'md', 'top', '16px')
assertStyleRuleIf(ifCss.ifWidth, 'width', 'md', 'width', '16px')
assertStyleRuleIf(ifCss.ifZIndex, 'zIndex', '', '', '', true)
