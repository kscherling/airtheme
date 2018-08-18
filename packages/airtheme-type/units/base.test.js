import createUnit, { createUnitFactoryFor } from './base'

describe('#createUnit', () => {
  it('returns base unit', () => {
    const unit = createUnit()

    expect(unit).toEqual({
      type: 'unit',
      value: null
    })
  })

  it('returns new unit type', () => {
    const unit = createUnit(({type: 'air'}))

    expect(unit).toEqual({
      type: 'air',
      value: null
    })
  })

  it('does not set value', () => {
    const unit = createUnit(({type: 'air', value: 'theme'}))

    expect(unit).toEqual({
      type: 'air',
      value: null
    })
  })
})
