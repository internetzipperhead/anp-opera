import * as actionTypes from './actionTypes'
import { IDispatchAction } from '../../../model/interface'

export const globalState = {
  title: localStorage.getItem('title') || '运维歌剧院',
  themeIndex: Number(localStorage.getItem('themeIndex')) || 0,
  themeList: [
    {main: "#eda938", light: "#f4cc87", dark: "#e79021", ex: "#ce7529", assist: "#1980da"},
    {main: "#ff4c26", light: "#ffcabc", dark: "#e83f1d", ex: "#c12a0f", assist: "#0e95ac"},
  ]
}

interface GlobalState {
  title: string,
  themeIndex: number,
  themeList: any[]
}

export default (state: GlobalState, action: IDispatchAction) => {
  switch (action.type) {
    case actionTypes.SET_TITLE:
    case actionTypes.SET_THEME:
      return Object.assign(state, action.data)
    default:
      return state
  }
}
