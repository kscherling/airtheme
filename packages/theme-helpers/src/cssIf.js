const noop = () => null

// Background
export const backgroundColor = noop('background-color', 'color')
export const background = backgroundColor

// Border
export const borderColor = noop('border-color', 'color')
export const borderBottomColor = noop('border-bottom-color', 'color')
export const borderLeftColor = noop('border-left-color', 'color')
export const borderRightColor = noop('border-right-color', 'color')
export const borderTopColor = noop('border-top-color', 'color')

// Dimension
export const height = noop('height', 'dimension')
export const maxHeight = noop('max-height', 'dimension')
export const maxWidth = noop('max-width', 'dimension')
export const minHeight = noop('min-height', 'dimension')
export const minWidth = noop('min-width', 'dimension')
export const width = noop('width', 'dimension')

// Font
export const color = noop('color', 'color')
export const fontFamily = noop('font-family', 'fontFamily')
export const fontSize = noop('font-size', 'fontSize')
export const fontWeight = noop('font-weight', 'fontWeight')
export const lineHeight = noop('line-height', 'lineHeight')

// Position
export const zIndex = noop('z-index', 'zIndex')
export const top = noop('top', 'dimension')
export const left = noop('left', 'dimension')
export const right = noop('right', 'dimension')
export const bottom = noop('bottom', 'dimension')

// Margin
export const margin = noop('margin', 'dimension')
export const marginTop = noop('margin-top', 'dimension')
export const marginBottom = noop('margin-bottom', 'dimension')
export const marginLeft = noop('margin-left', 'dimension')
export const marginRight = noop('margin-right', 'dimension')

// Padding
export const padding = noop('padding', 'dimension')
export const paddingTop = noop('padding-top', 'dimension')
export const paddingBottom = noop('padding-bottom', 'dimension')
export const paddingLeft = noop('padding-left', 'dimension')
export const paddingRight = noop('padding-right', 'dimension')

// BorderRadius
export const borderRadius = noop('border-radius', 'borderRadius')
export const borderTopLeftRadius = noop( 'border-top-left-radius', 'borderRadius') //prettier-ignore
export const borderTopRightRadius = noop( 'border-top-right-radius', 'borderRadius') //prettier-ignore
export const borderBottomLeftRadius = noop( 'border-bottom-left-radius', 'borderRadius') //prettier-ignore
export const borderBottomRightRadius = noop( 'border-bottom-right-radius', 'borderRadius') //prettier-ignore

// boxShadow
export const boxShadow = noop('box-shadow', 'boxShadow')
