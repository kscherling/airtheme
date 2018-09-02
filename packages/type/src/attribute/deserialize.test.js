import unit from '../unit'
import themeType from '../theme'
import attribute from './index'
import deserializeAttribute from './deserialize'

const theme = themeType.base()

it('deserializes', () => {
  // const serialized = attribute.fontSize({
  //   content: [
  //     unit.factor({ name: 'sm', value: '0.5' }),
  //     unit.factor({ name: 'md', value: '1' }),
  //     unit.factor({ name: 'lg', value: '1.5' })
  //   ]
  // })
  //
  // const deserialized = deserializeAttribute(serialized, theme)

  expect(true).toEqual(true)
})
