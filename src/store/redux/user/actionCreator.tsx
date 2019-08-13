import * as actionTypes from './actionTypes'


interface IUserinfo {
  username: string,
  avatar: string | null
}

export const login = (data: IUserinfo) => ({
  type: actionTypes.LOG_IN,
  data: {
    isLogin: true,
    username: data.username,
    avatar: data.avatar
  }
})
