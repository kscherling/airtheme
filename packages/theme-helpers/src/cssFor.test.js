import { cleanup } from 'react-testing-library'
import assertStyleRule from './test/assertStyleRule'
import * as cssFor from './cssFor'

afterEach(cleanup)

assertStyleRule(cssFor.background, 'primary', 'background', '#0b3954')
assertStyleRule(cssFor.backgroundColor, 'primary', 'background-color', '#0b3954') // prettier-ignore
assertStyleRule(cssFor.borderBottomColor, 'primary', 'border-bottom-color', '#0b3954') // prettier-ignore
assertStyleRule(cssFor.borderBottomLeftRadius, 'sm', 'border-bottom-left-radius', '3px', true) // prettier-ignore
assertStyleRule(cssFor.borderBottomRightRadius, 'sm', 'border-bottom-right-radius', '3px', true) // prettier-ignore
assertStyleRule(cssFor.borderColor, 'primary', 'border-color', '#0b3954')
assertStyleRule(cssFor.borderLeftColor, 'primary', 'border-left-color', '#0b3954') // prettier-ignore
assertStyleRule(cssFor.borderRadius, 'sm', 'border-radius', '3px', true)
assertStyleRule(cssFor.borderRightColor, 'primary', 'border-right-color', '#0b3954') // prettier-ignore
assertStyleRule(cssFor.borderTopColor, 'primary', 'border-top-color', '#0b3954')
assertStyleRule(cssFor.borderTopLeftRadius, 'sm', 'border-top-left-radius', '3px', true) // prettier-ignore
assertStyleRule(cssFor.borderTopRightRadius, 'sm', 'border-top-right-radius', '3px', true) // prettier-ignore
assertStyleRule(cssFor.bottom, 'md', 'bottom', '16px')
assertStyleRule(cssFor.boxShadow, '', '', '', true)
assertStyleRule(cssFor.caretColor, 'primary', 'caret-color', '#0b3954')
assertStyleRule(cssFor.color, 'primary', 'color', '#0b3954')
assertStyleRule(cssFor.fontFamily, 'title', 'font-family', 'Helvetica')
assertStyleRule(cssFor.fontSize, 'sm', 'font-size', '14.4px')
assertStyleRule(cssFor.fontWeight, 'lt', 'font-weight', '300')
assertStyleRule(cssFor.gridColumnGap, 'md', 'grid-column-gap', '16px')
assertStyleRule(cssFor.gridGap, 'md', 'grid-gap', '16px')
assertStyleRule(cssFor.gridRowGap, 'md', 'grid-row-gap', '16px')
assertStyleRule(cssFor.height, 'md', 'height', '16px')
assertStyleRule(cssFor.left, 'md', 'left', '16px')
assertStyleRule(cssFor.lineHeight, '', '', '', true)
assertStyleRule(cssFor.margin, 'md', 'margin', '16px')
assertStyleRule(cssFor.marginBottom, 'md', 'margin-bottom', '16px')
assertStyleRule(cssFor.marginLeft, 'md', 'margin-left', '16px')
assertStyleRule(cssFor.marginRight, 'md', 'margin-right', '16px')
assertStyleRule(cssFor.marginTop, 'md', 'margin-top', '16px')
assertStyleRule(cssFor.maxHeight, 'md', 'max-height', '16px')
assertStyleRule(cssFor.maxWidth, 'md', 'max-width', '16px')
assertStyleRule(cssFor.minHeight, 'md', 'min-height', '16px')
assertStyleRule(cssFor.minWidth, 'md', 'min-width', '16px')
assertStyleRule(cssFor.opacity, '', '', '', true)
assertStyleRule(cssFor.outlineColor, 'primary', 'outline-color', '#0b3954')
assertStyleRule(cssFor.padding, 'md', 'padding', '16px')
assertStyleRule(cssFor.paddingBottom, 'md', 'padding-bottom', '16px')
assertStyleRule(cssFor.paddingLeft, 'md', 'padding-left', '16px')
assertStyleRule(cssFor.paddingRight, 'md', 'padding-right', '16px')
assertStyleRule(cssFor.paddingTop, 'md', 'padding-top', '16px')
assertStyleRule(cssFor.right, 'md', 'right', '16px')
assertStyleRule(cssFor.top, 'md', 'top', '16px')
assertStyleRule(cssFor.width, 'md', 'width', '16px')
assertStyleRule(cssFor.zIndex, '', '', '', true)
