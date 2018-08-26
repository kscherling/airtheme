import React from 'react'
import { Provider } from 'react-redux'
import { theme } from '@airtheme/type'
import makeStore from '@airtheme/make'

const store = makeStore({ theme: theme.base() })

const MakeProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default MakeProvider
