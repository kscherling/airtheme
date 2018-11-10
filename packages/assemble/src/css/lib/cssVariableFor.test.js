import cssVariableFor, {
  cssVariableForBase,
  cssVariableForSetting
} from './cssVariableFor'

test('adds `--` prefix', () => {
  const result = cssVariableFor('variable-string')

  expect(result).toEqual('--variable-string')
})

describe('#cssVariableForBase', () => {
  test('adds `--` prefix', () => {
    const result = cssVariableForBase('element', 'modifier')

    expect(result).toEqual('--element_modifier')
  })
})

describe('#cssVariableForSetting', () => {
  test('adds `--` prefix', () => {
    const result = cssVariableForSetting('element', 'modifier')

    expect(result).toEqual('--element_modifier')
  })
})
