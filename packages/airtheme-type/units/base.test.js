import createUnit, { createUnitFactoryFor } from './base'

describe('#createUnit', () => {
  it('returns base unit', () => {
    const unit = createUnit()

    expect(unit).toEqual({
      type: 'baseUnit',
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

describe('#createUnitFactoryFor', () => {
  it('returns base unit', () => {
    const unit = createUnit({ type: 'px' })
    const unitFactory = createUnitFactoryFor(unit)
    const unitOfType = unitFactory({ value: 16 })

    expect(unitOfType).toEqual({
      type: 'px',
      value: 16
    })
  })
})
