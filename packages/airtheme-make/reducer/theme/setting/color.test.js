import createStore from '../../../store/index'
import {
  addColor,
  updateColor,
  removeColor
} from '../../../action/theme/setting/color'
import { updateTheme } from '../../../action/root'
import baseState, { withBaseState } from '../../../test/baseState'
import { attribute, unit } from '@airtheme/airtheme-type'
import { withBaseSetting } from '../../../test/baseSetting'

let store

beforeEach(() => {
  store = createStore()
  store.dispatch(updateTheme(baseState.theme))
})

it('`addColor` adds a color', () => {
  const value = 'primary'
  const key = 'swatch'
  const ordinal = 1
  const initialColor = unit.reference({ key, value, ordinal })
  const updatedState = withBaseState({
    setting: withBaseSetting({
      color: attribute.color({ content: [initialColor] })
    })
  })

  store.dispatch(addColor(value, key, ordinal))
  const state = store.getState()

  expect(state).toEqual(updatedState)
})
