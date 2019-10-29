import * as actionTypes from './actionTypes'
import { IDispatchAction } from '../../../model/interface'

import Token from '../../../utils/auth'

export const userState = {
  isLogin: !!Number(localStorage.getItem('isLogin')),
  isAdmin: !!Number(localStorage.getItem('isAdmin')),
  username: localStorage.getItem('username'),
  userID: null,
  avatar: ''
}

interface IUserState {
  isLogin?: boolean;
  username: string;
  userID: string;
  avatar: string;
}

export default (state: IUserState, action: IDispatchAction) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      localStorage.setItem('isLogin', +action.data.isLogin + '')
      localStorage.setItem('isAdmin', +action.data.isAdmin + '')
      localStorage.setItem('username', action.data.username)
      return {...state, ...action.data}
    case actionTypes.LOG_OUT:
      localStorage.removeItem('isLogin')
      localStorage.removeItem('isAdmin')
      localStorage.removeItem('username')
      Token.removeToken()
      return {...state, isLogin: false, isAdmin: false}
    case actionTypes.SET_AUTH:
      return Object.assign(state, action.data)
    default:
      return state
  }
}
