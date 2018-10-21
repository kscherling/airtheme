// @flow

export type Typename = string
export type Name = string
export type Version = string
export type Id = string
export type Ordinal = number
export type Reference = string

export type UnitTypename =
  | 'Hex'
  | 'Hexa'
  | 'Px'
  | 'Reference'
  | 'Rem'
  | 'Rgb'
  | 'Rgba'
  | 'String'

export type AttributeTypename =
  | 'BaseFontSize'
  | 'BaseLineHeight'
  | 'BaseSpacing'
  | 'Color'
  | 'FontFace'
  | 'FontFamily'
  | 'FontSize'
  | 'FontWeight'
  | 'LineHeight'
  | 'Spacing'
  | 'Swatch'
