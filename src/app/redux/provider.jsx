import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
export default function Provider2({ children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
