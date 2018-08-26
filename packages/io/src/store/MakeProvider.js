import React from 'react'
import { Provider } from 'react-redux'
import makeStore from '@airtheme/make'

const store = makeStore()

const MakeProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default MakeProvider
