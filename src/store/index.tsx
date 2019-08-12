import React, { createContext, useReducer } from 'react'

import { LayoutProps } from '../utils/interface'
import globalReducer, { globalState } from './redux/global'


const context = createContext({})

const WrapperProvider = (props: LayoutProps) => {
  const [gState, gDispatch] = useReducer(globalReducer, globalState)
  const store = {
    global: {
      state: gState,
      dispatch: gDispatch
    }
  }

  return (
    <context.Provider value={store}>
      {props.children}
    </context.Provider>
  )
}

export { context }
export default WrapperProvider
