import createStore from '../store/index'
import { updateThemeName, updateThemeId } from '../action/theme'
import { theme, attribute } from '@airtheme/airtheme-type'

it('can update name', () => {
  const store = createStore()
  const updated = 'My theme'

  store.dispatch(updateThemeName(updated))
  const { theme } = store.getState()

  expect(theme.name).toEqual(updated)
})

it('can update the id', () => {
  const store = createStore()
  const updated = 'ID1234'

  store.dispatch(updateThemeId(updated))
  const { theme } = store.getState()

  expect(theme.id).toEqual(updated)
})
