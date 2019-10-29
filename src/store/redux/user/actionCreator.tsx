import * as actionTypes from './actionTypes'


interface IUserinfo {
  username: string;
  userID: string;
  avatar: string | null;
  isAdmin: boolean;
}

export const login = (data: IUserinfo) => ({
  type: actionTypes.LOG_IN,
  data: {
    isLogin: true,
    ...data
  }
})

export const logout = () => ({
  type: actionTypes.LOG_OUT,
  data: {}
})
