import React, { createContext, useReducer } from 'react'

import { LayoutProps } from '../model/interface'
import globalReducer, { globalState } from './redux/global'
import userReducer, { userState } from './redux/user'
import { IDispatchAction } from '../model/interface'

export let context = createContext({
  userinfo: {
    state: userState,
    dispatch: (action: IDispatchAction) => {}
  },
  global: {
    state: globalState,
    dispatch: (action: IDispatchAction) => {}
  }
})

const WrapperProvider = (props: LayoutProps) => {
  const [gState, gDispatch] = useReducer(globalReducer, globalState)
  const [uState, uDispatch] = useReducer(userReducer, userState)
  const store = {
    userinfo: {
      state: uState,
      dispatch: uDispatch
    },
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

export default WrapperProvider
