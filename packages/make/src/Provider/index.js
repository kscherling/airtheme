import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { theme } from '@airtheme/type'
import makeStore from '../store'

// Singleton
const defaultStore = makeStore({ theme: theme.base() })

const Provider = ({ store = defaultStore, children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default Provider
