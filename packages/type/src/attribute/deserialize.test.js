import unit from '../unit'
import base from '../base'
import attribute from './index'
import themeType from '../theme'
import deserializeAttribute from './deserialize'

const theme = themeType.base({
  base: base.base({
    baseFontSize: attribute.baseFontSize({
      content: unit.px({ name: 'baseFontSize', value: '16' })
    })
  })
})

it('deserializes', () => {
  const serialized = attribute.fontSize({
    content: [
      unit.factor({ name: 'sm', value: '0.5' }),
      unit.factor({ name: 'md', value: '1' }),
      unit.factor({ name: 'lg', value: '1.5' })
    ]
  })

  const deserialized = deserializeAttribute(serialized, theme)

  expect(deserialized).toEqual({ lg: '24px', md: '16px', sm: '8px' })
})
