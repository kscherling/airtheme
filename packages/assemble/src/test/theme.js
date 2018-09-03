import { theme, attribute, unit } from '@airtheme/type'
const { hexa, string, reference, factor } = unit
const {
  fontFace,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  swatch
} = attribute

export default theme.base({
  name: 'Test Theme',
  fontFace: fontFace({
    content: [
      string({ name: 'Arial Black', value: 'Arial Black', ordinal: 1 }),
      string({ name: 'Helvetica', value: 'Helvetica', ordinal: 1 }),
      string({ name: 'Andale Mono', value: 'Andale Mono', ordinal: 2 })
    ]
  }),
  setting: {
    fontFamily: fontFamily({
      content: [
        reference({ name: 'title', value: 'Helvetica', ordinal: 1 }),
        reference({ name: 'body', value: 'Helvetica', ordinal: 2 }),
        reference({ name: 'code', value: 'Andale Mono', ordinal: 3 })
      ]
    }),
    fontSize: fontSize({
      content: [
        factor({ name: 'sm', value: '0.9', ordinal: 1 }),
        factor({ name: 'md', value: '1', ordinal: 2 }),
        factor({ name: 'lg', value: '1.1', ordinal: 3 })
      ]
    }),
    fontWeight: fontWeight({
      content: [
        string({ name: 'lt', value: '300', ordinal: 1 }),
        string({ name: 'md', value: '500', ordinal: 2 }),
        string({ name: 'dk', value: '700', ordinal: 3 })
      ]
    }),
    spacing: spacing({
      content: [
        factor({ name: 'sm', value: '0.5', ordinal: 1 }),
        factor({ name: 'md', value: '1', ordinal: 2 }),
        factor({ name: 'lg', value: '1.5', ordinal: 3 })
      ]
    }),

    color: color({
      content: [
        reference({ name: 'primary', value: 'prussian blue', ordinal: 1 }),
        reference({ name: 'secondary', value: 'pastel red', ordinal: 2 }),
        reference({ name: 'ltGrey', value: 'pale aqua', ordinal: 3 })
      ]
    })
  },
  swatch: swatch({
    content: [
      hexa({ name: 'prussian blue', value: '#0B3954, 1', ordinal: 1 }),
      hexa({ name: 'pastel red', value: '#FF6663, 1', ordinal: 2 }),
      hexa({ name: 'pale aqua', value: '#BFD7EA, 1', ordinal: 3 })
    ]
  })
})
