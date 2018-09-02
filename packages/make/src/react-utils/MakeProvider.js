import React from 'react'
import { Provider } from 'react-redux'
import { theme } from '@airtheme/type'
import makeStore from '../store'

const defaultStore = makeStore({ theme: theme.base() })

const MakeProvider = ({ store = defaultStore, children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default MakeProvider
