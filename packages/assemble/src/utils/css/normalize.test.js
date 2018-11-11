import normalize from './normalize'

describe('normalizes', () => {
  test('block element', () => {
    expect(normalize('block element')).toEqual('block-element')
  })

  test('block- element', () => {
    expect(normalize('block- element')).toEqual('block-element')
  })

  test('block -element', () => {
    expect(normalize('block -element')).toEqual('block-element')
  })

  test('blockElement', () => {
    expect(normalize('blockElement')).toEqual('block-element')
  })

  test('BlockElement', () => {
    expect(normalize('BlockElement')).toEqual('block-element')
  })

  test('Block -Element', () => {
    expect(normalize('Block -Element')).toEqual('block-element')
  })
})
