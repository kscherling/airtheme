import { attribute, base, setting, theme, unit } from '@airtheme/type'

export default theme.base({
  name: '',
  version: '0.1.0',
  base: base.base({
    baseFontSize: attribute.baseFontSize({
      content: unit.px({ value: '16', name: 'baseFontSize' })
    }),
    baseLineHeight: attribute.baseLineHeight({
      content: unit.factor({ value: '1.15', name: 'baseLineHeight' })
    }),
    baseSpacing: attribute.baseSpacing({
      content: unit.px({ value: '16', name: 'baseSpacing' })
    })
  }),
  setting: setting.base({
    fontFamily: attribute.fontFamily({
      content: [
        unit.reference({ name: 'title', value: 'Helvetica', ordinal: 1 }),
        unit.reference({ name: 'body', value: 'Helvetica', ordinal: 2 }),
        unit.reference({ name: 'code', value: 'Andale Mono', ordinal: 3 })
      ]
    }),
    fontSize: attribute.fontSize({
      content: [
        unit.factor({ name: 'sm', value: '0.9', ordinal: 1 }),
        unit.factor({ name: 'md', value: '1', ordinal: 2 }),
        unit.factor({ name: 'lg', value: '1.1', ordinal: 3 })
      ]
    }),
    fontWeight: attribute.fontWeight({
      content: [
        unit.string({ name: 'lt', value: '300', ordinal: 1 }),
        unit.string({ name: 'md', value: '500', ordinal: 2 }),
        unit.string({ name: 'dk', value: '700', ordinal: 3 })
      ]
    }),
    spacing: attribute.spacing({
      content: [
        unit.factor({ name: 'sm', value: '0.5', ordinal: 1 }),
        unit.factor({ name: 'md', value: '1', ordinal: 2 }),
        unit.factor({ name: 'lg', value: '1.5', ordinal: 3 })
      ]
    }),

    color: attribute.color({
      content: [
        unit.reference({ name: 'primary', value: 'prussian blue', ordinal: 1 }),
        unit.reference({ name: 'secondary', value: 'pastel red', ordinal: 2 }),
        unit.reference({ name: 'ltGrey', value: 'pale aqua', ordinal: 3 })
      ]
    })
  }),
  fontFace: attribute.fontFace({
    content: [
      unit.string({ name: 'Arial Black', value: 'Arial Black', ordinal: 1 }),
      unit.string({ name: 'Helvetica', value: 'Helvetica', ordinal: 1 }),
      unit.string({ name: 'Andale Mono', value: 'Andale Mono', ordinal: 2 })
    ]
  }),
  swatch: attribute.swatch({
    content: [
      unit.hexa({ name: 'prussian blue', value: '#0B3954ff', ordinal: 1 }),
      unit.hexa({ name: 'pastel red', value: '#FF6663ff', ordinal: 2 }),
      unit.hexa({ name: 'pale aqua', value: '#BFD7EAff', ordinal: 3 })
    ]
  })
})
