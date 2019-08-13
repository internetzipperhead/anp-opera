import * as actionTypes from './actionTypes'
import { IDispatchAction } from '../../../utils/interface'

export const userState = {
  isLogin: !!Number(localStorage.getItem('isLogin')) || false,
  username: '',
  avatar: '',
  token: localStorage.getItem('operaToken')
}

interface IUserState {
  isLogin: boolean,
  username: string,
  avatar: string,
  token: string | null
}

export default (state: IUserState, action: IDispatchAction) => {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return {...state, isLogin: true, ...action.data}
    case actionTypes.SET_AUTH:
      return Object.assign(state, action.data)
    default:
      return state
  }
}
