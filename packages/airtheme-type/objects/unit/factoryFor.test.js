import createUnit, { createFactoryForUnit } from './factoryFor'

describe('#createUnit', () => {
  it('returns base unit', () => {
    const unit = createUnit()

    expect(unit).toEqual({
      type: 'unit',
      value: null
    })
  })

  it('returns new unit type', () => {
    const unit = createUnit({ type: 'px' })

    expect(unit).toEqual({
      type: 'px',
      value: null
    })
  })

  it('does not set value', () => {
    const unit = createUnit({ type: 'px', value: 'theme' })

    expect(unit).toEqual({
      type: 'px',
      value: null
    })
  })
})

describe('#createFactoryForUnit', () => {
  it('returns base unit', () => {
    const unit = createUnit({ type: 'px' })
    const unitFactory = createFactoryForUnit(unit)
    const unitOfType = unitFactory({ value: 16 })

    expect(unitOfType).toEqual({
      type: 'px',
      value: 16
    })
  })
})
